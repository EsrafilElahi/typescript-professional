import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isBefore from 'date-fns/isBefore';
import parseISO from 'date-fns/parseISO';
import subHours from 'date-fns/subHours';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import React from 'react';
import useSWR from 'swr';
import Layout from '../../components/layout/layout';
import ChartCard from '../../components/simple-metrics/ChartCard';
import SimpleMetricsHeading from '../../components/simple-metrics/SimpleMetricsHeading';

const url = 'https://www.ansonlichtfuss.com/projects/simple-metrics';
const title = 'Simple Metrics for Raspberry Pi';
const description = `System resource metric graphs and tables to visualize data reported by my Raspberry Pi.`;

/**
 * Helpers
 */
const fetcher = (url: string) => fetch(url).then((r) => r.json());
const swrOptions = {
  revalidateOnFocus: false,
};

const DATA_ENDPOINT =
  'https://simple-metrics.ansonlichtfuss.com/api/metrics/system';
// const DATA_ENDPOINT = 'https://localhost:3000/api/metrics/system';
const ACCEPTABLE_HOURS_SINCE_REPORT = 24;

const getLatestMetric = (data: any, key: string) =>
  data?.response[key].data[data?.response[key].data.length - 1].y;

const filterPercent = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
  }).format(value);

const filterWholeNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(value);

/**
 *
 * Component
 *
 */
const SimpleMetricsIndex = (): JSX.Element => {
  const { data, error } = useSWR(DATA_ENDPOINT, fetcher, swrOptions);

  const system = data?.response.system;
  const lastReportTime = system?.lastReportTime;

  const mightBeDown =
    isBefore(
      parseISO(lastReportTime),
      subHours(new Date(), ACCEPTABLE_HOURS_SINCE_REPORT)
    ) || !!error;

  const latestCpuTotal = getLatestMetric(data, 'cpuTotal');
  const latestMemory = getLatestMetric(data, 'memory');
  const latestDisk = getLatestMetric(data, 'disk');
  const latestTemperature = getLatestMetric(data, 'temperature');

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <AnimateSharedLayout type="crossfade">
        <div className="max-w-2xl my-0 mx-auto">
          <SimpleMetricsHeading
            mightBeDown={mightBeDown}
            isLoading={!data && !error}
            hasError={!!error}
          />

          {!error && data && mightBeDown && (
            <div className="mb-4 flex justify-center">
              <div className="inline-block bg-gray-200 rounded py-2 px-4">
                No metrics reported in the last {ACCEPTABLE_HOURS_SINCE_REPORT}{' '}
                hours. Verify device is still active.
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 flex justify-center">
              <div className="inline-block bg-gray-200 rounded py-2 px-4">
                Unable to load data.
              </div>
            </div>
          )}

          {!error && data && (
            <>
              <motion.div className={'grid md:grid-cols-2 gap-8'}>
                <ChartCard
                  title="CPU"
                  primaryMetric={latestCpuTotal}
                  primaryMetricPrintout={filterPercent(latestCpuTotal / 100)}
                  data={data?.response.cpuCores}
                  colorScheme={{ scheme: 'dark2' }}
                />
                <ChartCard
                  title="RAM"
                  primaryMetric={(latestMemory / system.memory.total) * 100}
                  primaryMetricPrintout={filterPercent(
                    latestMemory / system.memory.total
                  )}
                  data={[data.response.memory]}
                  colorScheme={['#006837']}
                />
                <ChartCard
                  title="Disk"
                  primaryMetric={(latestDisk / system.disk.total) * 100}
                  primaryMetricPrintout={filterPercent(
                    latestDisk / system.disk.total
                  )}
                  data={[data?.response.disk]}
                  colorScheme={['#0868AC']}
                />
                <ChartCard
                  title="Temp"
                  primaryMetric={(latestTemperature / 80) * 100}
                  primaryMetricPrintout={`${filterWholeNumber(
                    latestTemperature
                  )}C`}
                  data={[data?.response.temperature]}
                  colorScheme={['#54278F']}
                />
              </motion.div>

              {!!lastReportTime && parseISO(lastReportTime) && (
                <motion.div
                  className="text-sm text-center mt-8 text-gray-600"
                  layoutId={`report-time`}
                >
                  Reported {formatDistanceToNow(parseISO(lastReportTime))} ago.
                </motion.div>
              )}
            </>
          )}
        </div>
      </AnimateSharedLayout>
    </Layout>
  );
};

export default SimpleMetricsIndex;
