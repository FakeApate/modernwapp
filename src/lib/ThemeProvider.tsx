"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

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
      <div
        data-color-mode={themeState}
        data-dark-theme="dark"
        data-light-theme="light"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
