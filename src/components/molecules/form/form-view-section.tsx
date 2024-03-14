import React, { ReactNode } from "react";
import { Typography, TypographyVariant } from "@/components";
import { tailwind } from "@/utils/tailwind/tailwind-utils";

type Props = {
  title?: string;
  caption?: string;
  className?: string;
  children?: ReactNode;
};

function FormViewSectionMolecule({
  title,
  caption,
  className,
  children,
}: Props) {
  return (
    <div className={tailwind(className)}>
      {title && (
        <Typography
          variant={TypographyVariant.SUBTITLE}
          className="mb-6"
        >
          {title}
        </Typography>
      )}

      {caption && (
        <Typography variant={TypographyVariant.BODY} className="mb-8">
          {caption}
        </Typography>
      )}

      <div className={tailwind("space-y-8")}>{children}</div>
    </div>
  );
}

export const FormViewSection = React.memo(FormViewSectionMolecule);
