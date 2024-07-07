"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (theme: string) => {},
});

export function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: string;
}) {
  const value = theme ?? "dark";

  const [themeState, setThemeState] = useState(value);
  const setTheme = (theme: string) => {
    setThemeState(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
