const sum = (a, b) => {
  return a + b
};

export { sum }

// it's js file --> can't use this file in typescript, tsc compiler doesn't allow that
// for use this file in typescript we have to create .d.ts file and declare it