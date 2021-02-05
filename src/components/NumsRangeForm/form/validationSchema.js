import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  startNum: Yup.number()
    .min(0, "Min value is 0")
    .nullable()
    .typeError("You must specify a number")
    .integer("Number should be integer")
    .positive("Number should be positive value")
    .required("This field is required"),
  stopNum: Yup.number()
    .min(0, "Min value is 0")
    .nullable()
    .typeError("You must specify a number")
    .integer("Number should be integer")
    .positive("Number should be positive value")
    .moreThan(Yup.ref("startNum"), "second field must be more than first field")
    .required("This field is required"),
});

export default validationSchema;
