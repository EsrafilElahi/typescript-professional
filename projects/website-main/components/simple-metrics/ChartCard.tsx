import { OrdinalColorScaleConfig } from '@nivo/colors';
// import { linearGradientDef } from '@nivo/core';
import { ResponsiveLine, Serie } from '@nivo/line';
import { ResponsivePie } from '@nivo/pie';
import { motion } from 'framer-motion';
import React from 'react';

/**
 * Types
 */
export interface Props {
  title: string;
  data: Serie[];
  primaryMetric: number;
  primaryMetricPrintout: string;
  colorScheme?: OrdinalColorScaleConfig<any>;
}

/**
 *
 * Component
 *
 */
const ChartCard = ({
  title,
  primaryMetric,
  primaryMetricPrintout,
  data,
  colorScheme,
}: Props): JSX.Element => {
  return (
    <motion.div
      // layout
      layoutId={`card-container-${title}`}
      className={`rounded overflow-hidden shadow-xl border-solid border border-gray-200 bg-white relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        key="unselected-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.3 }}
      >
        <div
          className="absolute bottom-0 opacity-50 z-10"
          style={{ width: '100%', height: '75px' }}
        >
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
            yScale={{
              type: 'linear',
              min: 0,
              max: 'auto',
            }}
            curve="natural"
            colors={colorScheme}
            enableArea={true}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            enableGridY={false}
            // defs={[
            //   linearGradientDef('gradientA', [
            //     { offset: 0, color: 'inherit' },
            //     { offset: 100, color: 'inherit', opacity: 0 },
            //   ]),
            // ]}
            fill={[{ match: '*', id: 'gradientA' }]}
            enablePoints={false}
            isInteractive={false}
            enableCrosshair={false}
            crosshairType="bottom"
            useMesh
            enableSlices="x"
          />
        </div>
        <div className="relative z-0">
          <div className="relative" style={{ width: '100%', height: '300px' }}>
            <ResponsivePie
              data={[
                {
                  id: 'metric',
                  value: primaryMetric,
                  color: '#000',
                },
                {
                  id: 'spacer',
                  label: 'haskell',
                  value: 100 - primaryMetric,
                  color: '#ddd',
                },
              ]}
              margin={{ top: 0, right: 50, bottom: 30, left: 50 }}
              startAngle={-135}
              endAngle={135}
              innerRadius={0.7}
              colors={['#000', 'rgba(0,0,0,0.1)']}
              enableRadialLabels={false}
              enableSliceLabels={false}
              isInteractive={false}
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <div className="text-4xl uppercase leading-none font-display font-black">
                {title}
              </div>
              <div>{primaryMetricPrintout}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChartCard;
