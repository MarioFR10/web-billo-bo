import React from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import {
  FormHelper,
  FormLabel,
  InlineAlert,
  InlineAlertVariant,
} from "@/components";

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

export type FormControlProps = {
  isRequired?: boolean;
  inputLabel?: string;
  helperText?: string;
  errorText?: string;
  inputWidth?: FormInputWidth;
  className?: string;
};

type Props = FormControlProps & {
  children: React.ReactNode;
};

function FormControlMolecule({
  isRequired,
  inputLabel,
  helperText,
  errorText,
  inputWidth = FormInputWidth.FOUR_COLUMN,
  className,
  children,
}: Props) {
  const widthClassName = FORM_INPUT_WIDTH_CLASSNAMES[inputWidth];

  return (
    <>
      <div
        className={tailwind(
          "flex flex-col space-y-2",
          widthClassName,
          className
        )}
      >
        {/* label */}
        <FormLabel isRequired={isRequired} label={inputLabel} />

        {/* form control content */}
        {/* TODO: search a better way to change de text color on error */}
        <div className={tailwind(errorText ? "text-red-600" : "text-inherit")}>
          {children}
        </div>

        {/* helper */}
        <FormHelper helperText={helperText} />

        {/* inline error banner */}
        {errorText && (
          <InlineAlert variant={InlineAlertVariant.ERROR} message={errorText} />
        )}
      </div>
    </>
  );
}

export const FormControl = React.memo(FormControlMolecule);
