import { ErrorMessage } from 'formik';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

function InputField(props) {
  const { field, form, type, label, placeholder } = props;
  const { name } = field;
  const { errors, touched } = form;
  const isError = errors[name] && touched[name];
  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Input name={name} {...field} type={type} placeholder={placeholder} invalid={isError} />
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </div>
  );
}

export default InputField;
