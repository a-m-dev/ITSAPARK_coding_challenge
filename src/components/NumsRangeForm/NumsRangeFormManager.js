import { useMemo } from "react";
import { initialValues, validationSchema } from "./form";

const NumsFormManager = ({ submitFormHandler }) => {
  return {
    formProps: {
      initialValues,
      validationSchema,
      enableReinitialize: true,
      onSubmit: submitFormHandler,
    },
  };
};

export default NumsFormManager;
