"use client";
import { setCookie } from "@/app/actions";
import { useContext, useState } from "react";
import { ThemeContext } from "@/lib/ThemeProvider";

function ColorModeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggle() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <button className="btn" onClick={toggle} aria-label="toggle">
      {theme}
    </button>
  );
}

export default ColorModeSwitcher;
