import "@/styles/globals.scss";
import Frame from "@/layout/frame";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/lib/ThemeProvider";
import W3Frame from "@/layout/w3_frame";
export const metadata: Metadata = {
  title: "Modern Web App",
  description: "A project to build a modern web app",
  keywords: ["responive", "app", "react"],
  applicationName: "ModernWebApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const themeC = cookieStore.get("theme")?.value ?? "dark";
  var theme = themeC === "light" ? "light" : "dark";

  return (
    <html
      className={"js-focus-visible"}
      data-js-focus-visible=""
      data-color-mode={theme}
    >
      <body className="w3-light-grey">
        <W3Frame>{children}</W3Frame>
      </body>
    </html>
  );
}
