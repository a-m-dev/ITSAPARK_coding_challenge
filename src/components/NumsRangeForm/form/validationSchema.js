import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  startNum: Yup.number()
    .min(0, "Min value is 0")
    .nullable()
    .typeError("You must specify a number")
    .integer("Number should be integer")
    .positive("Number should be positive value")
    .required("Start number is required"),
  stopNum: Yup.number()
    .min(0, "Min value is 0")
    .nullable()
    .typeError("You must specify a number")
    .integer("Number should be integer")
    .positive("Number should be positive value")
    .moreThan(Yup.ref("startNum"), "Stop number must be more than start number")
    .required("Stop number is required"),
});

export default validationSchema;
