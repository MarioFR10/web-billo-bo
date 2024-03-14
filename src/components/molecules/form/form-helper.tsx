import React from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { Typography, TypographyVariant } from "@/components";

type Props = {
  helperText?: string;
  className?: string;
};

function FormHelperMolecule({ helperText, className }: Props) {
  return (
    helperText && (
      <Typography
        variant={TypographyVariant.HELPER}
        className={tailwind("whitespace-pre-line", className)}
      >
        {helperText}
      </Typography>
    )
  );
}

export const FormHelper = React.memo(FormHelperMolecule);
