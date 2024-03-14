import React from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";

export enum TypographyVariant {
  HEADER = "HEADER",
  SUBTITLE = "SUBTITLE",
  BODY = "BODY",
  HELPER = "HELPER",
}

type VariantStyle = {
  component?: keyof JSX.IntrinsicElements;
  colorClassName?: string;
  styleClassName?: string;
  className?: string;
};

// TODO: missing color variants of evert typo
// TODO: disabled text color is missing
const variantStyles: { [key in TypographyVariant]: VariantStyle } = {
  [TypographyVariant.HEADER]: {
    component: "h1",
    className: "font-semibold text-xl md:text-3xl",
  },
  [TypographyVariant.SUBTITLE]: {
    component: "h2",
    className: "font-semibold text-base md:text-2xl",
  },
  [TypographyVariant.BODY]: {
    component: "p",
    className: "font-normal text-sm md:text-base",
  },
  [TypographyVariant.HELPER]: {
    component: "p",
    className: "font-normal text-xs md:text-sm",
  },
};

type HtmlSvgElement = React.HTMLAttributes<HTMLElement | SVGElement>;
type TypographyProps = {
  variant: TypographyVariant;
  className?: string;
};
type Props = TypographyProps & HtmlSvgElement;

function TypographyAtom({ variant, className, ...other }: Props) {
  const {
    component: Component,
    colorClassName,
    styleClassName,
    className: variantClassName,
  }: VariantStyle = variantStyles[variant];

  return (
    // @ts-ignore -- this is a generic component
    <Component
      {...other}
      className={tailwind(
        styleClassName,
        colorClassName,
        variantClassName,
        className
      )}
    />
  );
}

export const Typography = React.memo(TypographyAtom);
