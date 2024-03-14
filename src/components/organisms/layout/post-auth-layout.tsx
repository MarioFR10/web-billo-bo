import { ReactNode } from "react";
import { Header, Sidebar, Typography, TypographyVariant } from "@/components";

type Props = {
  headerTitle: string;
  children: ReactNode;
};

export function PostAuthLayout({ headerTitle, children }: Props) {
  return (
    <body>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Header title={headerTitle} />
          {children}
        </main>
      </div>
    </body>
  );
}
