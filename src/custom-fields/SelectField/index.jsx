import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/photo_category';

function SelectField(props) {
  const { field, label, type } = props;
  const { name } = field;
  console.log(field, label, type);
  return (
    <div className="">
      <FormGroup>
        {label && <Label for={name}>Category</Label>}
        <Input id={name} name={name} type={type} {...field}>
          {PHOTO_CATEGORY_OPTIONS.map((category, index) => {
            return <option key={index}>{category.label}</option>;
          })}
        </Input>
      </FormGroup>
    </div>
  );
}

export default SelectField;
