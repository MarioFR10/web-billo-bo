import React, { ReactNode, useCallback } from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";

export enum ButtonVariant {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

// TODO: check design system for all the styles
// TODO: disabled variants are missing
const defaultButtonClassName =
  "h-fit w-full md:w-fit py-4 px-8 rounded-lg font-normal text-sm md:text-base whitespace-nowrap transition duration-200 ease-in-out";
const commonVariantClassNames: { [key in ButtonVariant]: string } = {
  [ButtonVariant.PRIMARY]: `${defaultButtonClassName} text-white shadow-lg`,
  [ButtonVariant.SECONDARY]: `${defaultButtonClassName} border border-transparent shadow-md`,
};
const variantClassNames: { [key in ButtonVariant]: string } = {
  [ButtonVariant.PRIMARY]: `${
    commonVariantClassNames[ButtonVariant.PRIMARY]
  } bg-primary hover:bg-primary-dark`,
  [ButtonVariant.SECONDARY]: `${
    commonVariantClassNames[ButtonVariant.SECONDARY]
  } bg-white text-primary`,
};

type ButtonProps = {
  isDisabled?: boolean;
  variant: ButtonVariant;
  onClick?: () => any;
  children?: ReactNode;
};
type Props = ButtonProps & JSX.IntrinsicElements["button"];

export function Button({ variant, onClick, children }: Props) {
  const variantClassName = variantClassNames[variant];

  const handleOnClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <button onClick={handleOnClick} className={tailwind(variantClassName)}>
      {children}
    </button>
  );
}
