import { Field, reduxForm } from "redux-form";
import React from "react";

const renderField = ({ label, input, type, placeholder }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      className="form-control"
      {...input}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

const templateForm = props => {
  const { handleSubmit, pristine, reset, submitting, result } = props;
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        label="First Name"
        placeholder="First Name"
        component={renderField}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        component={renderField}
      />
      <small className="form-text text-muted mb-3">{result}</small>
      <div>
        <button
          className="btn btn-success mr-3"
          type="submit"
          disabled={pristine || submitting}
        >
          Submit
        </button>
        <button
          className="btn btn-light"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
      </div>
    </form>
  );
};

const SimpleForm = reduxForm({
  form: "auth"
})(templateForm);

export default SimpleForm;
