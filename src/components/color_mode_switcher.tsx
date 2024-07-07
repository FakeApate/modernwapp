"use client";
import { setCookie } from "@/app/actions";
import { useContext } from "react";
import { ThemeContext } from "@/lib/ThemeProvider";
import SunIcon from "@primer/octicons/build/svg/sun-16.svg";
import MoonIcon from "@primer/octicons/build/svg/moon-16.svg";
import classses from "./color_mode_switcher.module.scss";

function ColorModeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  function setToLight() {
    setTheme("light");
    setCookie("light");
  }

  function setToDark() {
    setTheme("dark");
    setCookie("dark");
  }

  return (
    <div className={classses.cbtn}>
      <div className="">
        <button
          className=""
          onClick={setToLight}
          aria-label="toggle"
          disabled={theme === "light"}
        >
          <div>
            <SunIcon className="" />
            <i>Light</i>
          </div>
        </button>
        <button
          className=""
          onClick={setToDark}
          aria-label="toggle"
          disabled={theme === "dark"}
        >
          <div>
            <MoonIcon className="" />
            <i>Dark</i>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ColorModeSwitcher;
