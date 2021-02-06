export const calculateTheRange = ({ startNum, stopNum, target }) => {
  const t1 = performance.now();

  let result = 0;

  for (let n = startNum; n <= stopNum; n++) {
    if (n % target === 0) result += 1;
  }

  const t2 = performance.now();

  const totalTime = (t2 - t1) / 1000;

  postMessage({ result, totalTime });
};
