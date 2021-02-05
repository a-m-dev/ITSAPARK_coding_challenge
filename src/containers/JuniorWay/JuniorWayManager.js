import { useCallback } from "react";

const JuniorWayManager = () => {
  const handleSubmitForm = useCallback(({ startNum, stopNum }) => {
    console.log(">>> SUBMITTING FORM", { startNum, stopNum });
  }, []);

  return {
    actions: { handleSubmitForm },
  };
};

export default JuniorWayManager;
