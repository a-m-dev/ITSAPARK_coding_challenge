import { useState, useCallback } from "react";

const SeniorWayManager = () => {
  const [timeItTakes, setTimeItTakes] = useState(0);
  const [count, setCount] = useState(null);

  // handlers
  const handleSubmitForm = useCallback(
    ({ startNum, stopNum }) => {
      console.log(">>> SUBMITTING FORM SENIOR", { startNum, stopNum });
      console.log("[STEP 1]: INITIALIZING");
      const t1 = performance.now();

      let result = 0;

      let countBeforeStart = findMultipantsCount(parseInt(startNum) - 1, 3);
      let countBeforeStop = findMultipantsCount(parseInt(stopNum), 3);

      result = countBeforeStop - countBeforeStart;

      const t2 = performance.now();
      console.log("[STEP 2]: COMPUTATION DONE", result);

      setCount(result);
      setTimeItTakes((t2 - t1) / 1000);
    },
    [setCount, setTimeItTakes]
  );

  const findMultipantsCount = (x, n) => {
    return Math.floor(x / n);
  };

  return {
    data: { count, timeItTakes },
    actions: { handleSubmitForm },
  };
};

export default SeniorWayManager;
