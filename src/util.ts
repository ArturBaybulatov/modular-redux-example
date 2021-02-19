export const wait = (sec: number) => new Promise(resolve => setTimeout(resolve, sec * 1000));
