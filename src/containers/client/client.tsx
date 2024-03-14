"use client";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { Typography, TypographyVariant } from "@/components";

export function Client() {
  return (
    <div className={tailwind("p-8")}>
      <Typography variant={TypographyVariant.HEADER}>
        UNDER CONSTRUCTION
      </Typography>
    </div>
  );
}
