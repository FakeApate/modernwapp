import * as React from "react";
import Frame from "@/layout/frame";
import { Metadata } from "next";
import { cookies } from "next/headers";
import "@/styles/global.scss";
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
  var mode = "dark";
  var light_theme = "light";
  var dark_theme = "dark";
  if (themeC.includes("light")) {
    mode = "light";
    light_theme = themeC;
  } else {
    mode = "dark";
    dark_theme = themeC;
  }
  return (
    <html className="js-focus-visible" data-js-focus-visible="">
      <body
        data-color-mode={mode}
        data-light-theme={light_theme}
        data-dark-theme={dark_theme}
      >
        <Frame>{children}</Frame>
      </body>
    </html>
  );
}
