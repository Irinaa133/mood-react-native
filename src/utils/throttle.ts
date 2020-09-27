export const throttle = (callback: (...args: any) => void, timeout = 1) => {
  let timer: number | undefined;
  return (...args: any) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      callback(...args);
      if (timer) {
        clearTimeout(timer);
        timer = undefined;
      }
    }, timeout);
  };
};
