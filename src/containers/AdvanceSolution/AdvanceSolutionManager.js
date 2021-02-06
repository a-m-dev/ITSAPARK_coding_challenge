import { useState, useCallback } from "react";

const AdvanceSolutionManager = () => {
  const [timeItTakes, setTimeItTakes] = useState(0);
  const [count, setCount] = useState(null);

  // handlers
  const handleSubmitForm = useCallback(
    ({ startNum, stopNum }) => {
      console.log(">>> ADVANCE", { startNum, stopNum });
      const t1 = performance.now();

      let result = 0n;

      let countBeforeStart = findMultipantsCount(BigInt(startNum) - 1n, 3n);
      let countBeforeStop = findMultipantsCount(BigInt(stopNum), 3n);

      result = countBeforeStop - countBeforeStart;

      const t2 = performance.now();

      setCount(result);
      setTimeItTakes((t2 - t1) / 1000);
    },
    [setCount, setTimeItTakes]
  );

  const findMultipantsCount = (x, n) => {
    return x / n;
  };

  return {
    data: { count, timeItTakes },
    actions: { handleSubmitForm },
  };
};

export default AdvanceSolutionManager;
