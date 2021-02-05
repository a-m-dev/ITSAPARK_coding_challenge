import { Form, InputField } from "..";
import NumsFormManager from "./NumsRangeFormManager";
import "./NumsRangeForm.scss";

const NumsRangeForm = ({ submitFormHandler, ...rest }) => {
  const { formProps } = NumsFormManager({ submitFormHandler });

  return (
    <section className="nums-range-form">
      <Form {...formProps}>
        <InputField name="startNum" label="Start Number" />
        <InputField name="stopNum" label="Stop Number" />

        <button type="submit">Submit</button>
      </Form>
    </section>
  );
};

NumsRangeForm.defaultProps = {
  submitFormHandler: () => {},
};

export default NumsRangeForm;
