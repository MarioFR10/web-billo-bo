import React from "react";
import {
  FormGenericTextField,
  FormTextFieldProps,
} from "./form-generic-text-field";
import { InputAtom } from "@/components";

function FormInputMolecule({
  isDisabled = false,
  isRequired,
  isErrorActive,
  name: initialName,
  value: initialValue,
  formProps: initialFormProps,
  onInputChange,
  onBlur,
  ...formControlProps
}: FormTextFieldProps) {
  return (
    <FormGenericTextField
      isRequired={isRequired}
      isErrorActive={isErrorActive}
      name={initialName}
      value={initialValue}
      formProps={initialFormProps}
      {...formControlProps}
    >
      {({ name, value, formProps }) => (
        <InputAtom
          disabled
          name={name}
          value={value}
          onBlur={formProps.handleBlur}
          onChange={formProps.handleChange}
          formikProps={formProps} />
      )}
    </FormGenericTextField>
  );
}

export const FormInput = FormInputMolecule;
