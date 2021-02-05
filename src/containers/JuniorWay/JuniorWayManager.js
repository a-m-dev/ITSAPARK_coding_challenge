import { useState, useCallback } from "react";

const JuniorWayManager = () => {
  const [timeItTakes, setTimeItTakes] = useState(0);
  const [count, setCount] = useState(null);

  // handlers
  const handleSubmitForm = useCallback(
    ({ startNum, stopNum }) => {
      console.log(">>> SUBMITTING FORM JUNIOR", { startNum, stopNum });
      console.log("[STEP 1]: INITIALIZING");
      const t1 = performance.now();

      let result = 0;

      for (let n = startNum; n <= stopNum; n++) {
        if (n % 3 === 0) result += 1;
      }

      const t2 = performance.now();
      console.log("[STEP 2]: COMPUTATION DONE");

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

export default JuniorWayManager;
