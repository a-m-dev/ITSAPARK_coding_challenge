import { useState, useCallback } from "react";

const BruteForceSolutionManager = () => {
  const [timeItTakes, setTimeItTakes] = useState(0);
  const [count, setCount] = useState(null);

  // handlers
  const handleSubmitForm = useCallback(
    ({ startNum, stopNum }) => {
      console.log(">>> BRUTE-FORCE", { startNum, stopNum });
      const t1 = performance.now();

      let result = 0;

      for (let n = parseInt(startNum); n <= parseInt(stopNum); n++) {
        if (n % 3 === 0) result += 1;
      }

      const t2 = performance.now();

      setCount(result);
      setTimeItTakes((t2 - t1) / 1000);
    },
    [setCount, setTimeItTakes]
  );

  return {
    data: { count, timeItTakes },
    actions: { handleSubmitForm },
  };
};

export default BruteForceSolutionManager;
