export const calculateTheRange = ({ startNum, stopNum, target }) => {
  let result = 0;

  for (let n = startNum; n <= stopNum; n++) {
    if (n % target === 0) result += 1;
  }

  postMessage({ result });
};
