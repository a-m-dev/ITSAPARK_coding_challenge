import { useField } from "formik";
import "./InputField.scss";

const InputField = ({ type, label, name, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <fieldset className="input-field">
      <span className="input-field__label">{label}</span>
      <input
        {...field}
        type={type}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        className="input-field__input"
      />
      {meta.touched && meta.error ? (
        <div className="input-field__error">
          <span>{meta.error}</span>
        </div>
      ) : null}
    </fieldset>
  );
};

InputField.defaultProps = {
  type: "text",
  placeholder: "",
  label: "Some Label",
};

export default InputField;
