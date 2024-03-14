import Image from "next/image";
import loginImg from "../../../public/images/login/login.png";
import { tailwind } from "@/utils/tailwind/tailwind-utils";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen mx-6 my-8 md:mx-8 md:my-10">
      {/* left side */}
      <div
        className={tailwind(
          "hidden w-1/3",
          "md:flex lg:flex md:w-1/2 lg:w-1/2",
          "bg-white"
        )}
      >
        <div className={tailwind("flex", "rounded-lg", "bg-billo-gray")}>
          <div className="my-auto mx-7">
            <Image priority src={loginImg} alt="Login" />
          </div>
        </div>
      </div>

      {/* right side */}
      <div
        className={tailwind(
          "flex flex-col",
          "items-center",
          "w-full md:w-1/2 lg:w-1/2"
        )}
      >
        {children}
      </div>
    </div>
  );
}
