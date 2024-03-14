"use client";
import { TEXT } from "@/static/texts/i18n";
import { Header, PostAuthLayout, Sidebar } from "@/components";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <PostAuthLayout headerTitle={TEXT.CONTAINERS.CLIENT.TITLE}>{children}</PostAuthLayout>
    </html>
  );
}
