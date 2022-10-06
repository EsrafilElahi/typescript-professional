const addJob = <Type>(job: Type) => {
  return `your job is ${job}`;
};

type objType = {
  meta: string;
};

type arrType = number[];

interface JobInterface<T, V> {
  job: string;
  data: T;
  version: V;
}

const jobInstance1: JobInterface<objType, number> = {
  job: "programmer",
  data: { meta: "facebook" },
  version: 1,
};

const jobInstance2: JobInterface<arrType, number> = {
  job: "programmer",
  data: [2, 4, 6, 1, 4],
  version: 2,
};

const result1 = addJob(jobInstance2);

const result2 = addJob<string>("developer");

const result3 = addJob<JobInterface<objType, number>>(jobInstance1);
