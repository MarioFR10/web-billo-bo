import { tailwind } from "@/utils/tailwind/tailwind-utils";
import { Client } from "@/containers/client/client";

export default function ClientScreen() {
  return (
    <main className={tailwind()}>
      <Client />
    </main>
  );
}
