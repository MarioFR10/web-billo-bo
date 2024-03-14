import React, { ChangeEvent, RefObject } from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { FormikProps, FormikValues } from "formik";

type TextFieldProps = {
  isRequired?: boolean;
  isDisabled?: boolean;
  formikProps?: FormikProps<FormikValues>;
  value?: any;
  onBlur?: (event?: any) => void;
  onChange?: (event?: any) => void;
  onFocus?: (event?: any) => void;
  className?: string;
};

type IntrinsicTextFieldProps = TextFieldProps & JSX.IntrinsicElements["input"];

type Props = IntrinsicTextFieldProps & {
  ref?: RefObject<any>;
  inputForwardedRef?: RefObject<any>;
};

export function InputAtom({
  isRequired,
  isDisabled,
  name,
  value,
  formikProps,
  onChange,
  onBlur,
  className,
}: Props) {
  const handleBlur = onBlur || formikProps?.handleBlur;
  const handleChange = onChange || formikProps?.handleChange;

  // TODO: fix this styles
  const commonInputClass =
    "border-2 text-sm md:text-base rounded-lg p-4 bg-white";

  return (
    <input
      required={isRequired}
      disabled={isDisabled}
      name={name}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      className={tailwind("w-full", commonInputClass, className)}
    />
  );
}
