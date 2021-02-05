import { useState, useEffect, useCallback } from "react";

import worker from "workerize-loader!../../../src/workers/computeNum"; // eslint-disable-line import/no-webpack-loader-syntax

const MidLevelWayManager = () => {
  const [timeItTakes, setTimeItTakes] = useState(0);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const workerInstance = worker();

  // effects
  useEffect(() => {
    workerInstance.addEventListener("message", (evt) => {
      if (evt.data?.result) {
        setCount(evt.data.result);
        setLoading(false);
      }
    });
  }, [setCount, workerInstance, setLoading]);

  // handlers
  const handleSubmitForm = useCallback(
    ({ startNum, stopNum }) => {
      console.log(">>> SUBMITTING FORM JUNIOR", { startNum, stopNum });

      setLoading(true);
      const t1 = performance.now();

      workerInstance.calculateTheRange({
        startNum: parseInt(startNum),
        stopNum: parseInt(stopNum),
        target: 3,
      });

      const t2 = performance.now();

      // setCount(result);
      setTimeItTakes((t2 - t1) / 1000);
    },
    [setCount, setTimeItTakes, workerInstance, setLoading]
  );

  return {
    data: { count, timeItTakes, loading },
    actions: { handleSubmitForm },
  };
};

export default MidLevelWayManager;
