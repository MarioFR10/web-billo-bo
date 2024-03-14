import React from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { InputAtom } from "@/components";
import { FormLabel } from "./form-label";
import { FormHelper } from "./form-helper";

/**
 * This columns width are based on the UX team figma standard
 * where each column width is around ~94px in desktop
 * and about ~90px in mobile.
 *
 * The idea behind this is to standardize control widths
 */
export enum FormInputWidth {
  ONE_COLUMN = "ONE_COLUMN",
  TWO_COLUMN = "TWO_COLUMN",
  THREE_COLUMN = "THREE_COLUMN",
  FOUR_COLUMN = "FOUR_COLUMN",
}

export const FORM_INPUT_WIDTH_CLASSNAMES: {
  [type in FormInputWidth]: string;
} = {
  [FormInputWidth.ONE_COLUMN]: "w-full xs:max-w-24 md:max-w-24",
  [FormInputWidth.TWO_COLUMN]: "w-full xs:max-w-51 md:max-w-51",
  [FormInputWidth.THREE_COLUMN]: "w-full xs:max-w-68 md:max-w-80",
  [FormInputWidth.FOUR_COLUMN]: "w-full xs:max-w-80 md:max-w-106",
};

export type Props = {
  isRequired?: boolean;
  inputValue: string;
  inputLabel?: string;
  helperText?: string;
  errorText?: string;
  inputWidth?: FormInputWidth;
  onChange: (value: string | number) => void;
  className?: string;
};

function FormInputMolecule({
  isRequired = false,
  inputLabel,
  inputValue,
  helperText,
  errorText,
  inputWidth = FormInputWidth.FOUR_COLUMN,
  onChange,
  className,
}: Props) {
  const widthClassName = FORM_INPUT_WIDTH_CLASSNAMES[inputWidth];

  return (
    <div
      className={tailwind("flex flex-col space-y-2", widthClassName, className)}
    >
      {/* label */}
      <FormLabel isRequired={isRequired} label={inputLabel} />

      {/* Form input content */}
      <InputAtom value={inputValue} onChange={onChange} />

      {/* helper */}
      <FormHelper helperText={helperText}></FormHelper>
    </div>
  );
}

export const FormInput = React.memo(FormInputMolecule);
