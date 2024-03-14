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
        "justify-between items-center shadow-md",
        "px-8 py-5",
        "h-20 z-40",
        className
      )}
    >
      <Typography variant={TypographyVariant.HEADER} className={tailwind("")}>
        {title}
      </Typography>

      {/* TODO: this has to be a clickable object */}
      <div className="hidden md:block">
        <div className="h-10 w-10 rounded-full flex items-center justify-center text-bold text-primary bg-zinc-300">
          <span className="font-semibold text-xl">AS</span>
        </div>
      </div>
    </div>
  );
}
