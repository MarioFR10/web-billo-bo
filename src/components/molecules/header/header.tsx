import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { Typography, TypographyVariant } from "@/components";

type Props = {
  title: string;
  className?: string;
};

export function Header({ title, className }: Props) {
  return (
    <div
      className={tailwind(
        "flex flex-row",
        "z-30 shadow-md",
        // "w-full h-20 sticky",
        // "justify-between items-center",
        "bg-white",
        className
      )}
    >
      <Typography
        variant={TypographyVariant.HEADER}
        className={tailwind("truncate flex-1")}
      >
        {title}
      </Typography>
    </div>
  );
}
