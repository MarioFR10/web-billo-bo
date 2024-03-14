import React from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { Typography, TypographyVariant } from "@/components";

type Props = {
  isRequired?: boolean;
  label?: string;
  className?: string;
};

function FormLabelMolecule({ isRequired, label, className }: Props) {
  return (
    label && (
      <Typography
        variant={TypographyVariant.BODY}
        className={tailwind(className)}
      >
        {isRequired && "* "}
        {label}
      </Typography>
    )
  );
}

export const FormLabel = React.memo(FormLabelMolecule);
