import { useCallback } from "react";

const SeniorWayManager = () => {
  const handleSubmitForm = useCallback(({ startNum, stopNum }) => {
    console.log(">>> SUBMITTING FORM FROM SENIOR", { startNum, stopNum });
  }, []);

  return {
    actions: { handleSubmitForm },
  };
};

export default SeniorWayManager;
