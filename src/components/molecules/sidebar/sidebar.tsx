import Image from "next/image";
import logoImg from "../../../../public/images/logo/logo_gray_md.png";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { Typography, TypographyVariant } from "@/components";

type Props = {
  className?: string;
};

export function Sidebar({ className }: Props) {
  return (
    <div
      className={tailwind(
        "h-screen w-60",
        "shadow-lg",
        "z-40",
        // "flex flex-row",
        // "items-center shadow-md",
        // "w-60 overflow-x-hidden overflow-y-hidden",
        //   "h-20 z-30",
        //   "bg-white",
        className
      )}
    >
      <div className={tailwind("flex justify-center", "pt-10 pb-8 px-2")}>
        <Image priority src={logoImg} alt="Logo" />
      </div>
    </div>
  );
}
