import { useState, useEffect, useCallback } from "react";

import worker from "workerize-loader!../../../src/workers/computeNum"; // eslint-disable-line import/no-webpack-loader-syntax

const WorkerSolutionManager = () => {
  const [timeItTakes, setTimeItTakes] = useState(0);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const workerInstance = worker();

  // effects
  useEffect(() => {
    workerInstance.addEventListener("message", (evt) => {
      if (evt.data?.result) {
        setCount(evt.data.result);
        setTimeItTakes(evt.data.totalTime);
        setLoading(false);
      }
    });
  }, [setCount, workerInstance, setTimeItTakes, setLoading]);

  // handlers
  const handleSubmitForm = useCallback(
    ({ startNum, stopNum }) => {
      console.log(">>> WORKER", { startNum, stopNum });

      setLoading(true);

      workerInstance.calculateTheRange({
        startNum: parseInt(startNum),
        stopNum: parseInt(stopNum),
        target: 3,
      });
    },
    [workerInstance, setLoading]
  );

  return {
    data: { count, timeItTakes, loading },
    actions: { handleSubmitForm },
  };
};

export default WorkerSolutionManager;
