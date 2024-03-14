import React, { ChangeEvent } from "react";
import { tailwind } from "@/utils/tailwind/tailwind-utils";

type Props = {
  value: string | number;
  onChange: (value: string | number) => void;
  className?: string;
};

export function InputAtom({ value, onChange, className }: Props) {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  // bg-transparent1
  // focus:outline-none1
  // const borderClass = "ring-red-950";
  const commonInputClass =
    "border-2 text-sm md:text-base rounded-lg p-4 bg-white";

  return (
    <input
      value={value}
      onChange={handleInputChange}
      className={tailwind(commonInputClass, className)}
    />
  );
}
