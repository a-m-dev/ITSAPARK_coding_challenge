import { useCallback } from "react";

const MidLevelWayManager = () => {
  const handleSubmitForm = useCallback(({ startNum, stopNum }) => {
    console.log(">>> SUBMITTING FORM FROM MID LEVEL", { startNum, stopNum });
  }, []);

  return {
    actions: { handleSubmitForm },
  };
};

export default MidLevelWayManager;
