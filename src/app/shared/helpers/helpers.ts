export const randomGenChar = (...args: any): string => {
  if (args.length === 1) {
    return args[0];
  }

  return Math.random() < 0.5 ? args[0] : args[1];
};

export const getLastItemOfArray = (arr: any[]): any[] => {
  return arr[arr.length - 1];
};
