import { useState } from "react";

type UseLoginHook = {
  email: string;
  password: string;
};

export function useLogin(): UseLoginHook {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return {
    email,
    password,
  };
}
