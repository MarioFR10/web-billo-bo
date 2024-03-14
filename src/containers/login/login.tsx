"use client";
import Image from "next/image";
import logoImg from "../../../public/images/logo/logo_gray_md.png";
import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { LoginForm } from "@/components";

export function Login() {
  return (
    <div className={tailwind("flex flex-col")}>
      <div className="flex justify-center">
        <Image priority src={logoImg} alt="Logo" />
      </div>
      <LoginForm />
    </div>
  );
}
