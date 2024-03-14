import { tailwind } from "@/utils/tailwind/tailwind-utils";
import React from "react";
import { Typography, TypographyVariant } from "./typography";

export enum InlineAlertVariant {
  ERROR = "ERROR",
}

type Props = {
  message: string;
  variant: InlineAlertVariant;
  className?: string;
};

const variants = {
  ERROR: {
    // icon: BilloIconSymbol.ALERT,
    messageColorClasses: "text-alert",
    colorClasses: "bg-alert-light",
  },
};

function InlineAlertAtom({
  message,
  variant = InlineAlertVariant.ERROR,
  className,
}: Props): JSX.Element {
  const { messageColorClasses, colorClasses } =
    variants[variant] || variants.ERROR;

  return (
    <div
      className={tailwind(
        "flex rounded-lg p-4 shadow-md",
        colorClasses,
        className
      )}
    >
      <div className="flex flex-col flex-grow ml-0 mr-2 mt-0.5 md:mt-0">
        <div className="flex flex-col w-full">
          {/* Content */}
          <Typography
            variant={TypographyVariant.BODY}
            className={messageColorClasses}
          >
            {message}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export const InlineAlert = React.memo(InlineAlertAtom);
