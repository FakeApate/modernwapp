"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./navigation.module.scss";
export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={classes.nav}>
      <menu className={classes.sidenav}>
        <Link href="/" className="" aria-current={pathname === "/"}>
          Dashboard
        </Link>

        <Link href="/page1" className="" aria-current={pathname === "/page1"}>
          Page 1
        </Link>
        <Link href="/page2" className="" aria-current={pathname === "/page2"}>
          Page 2
        </Link>
      </menu>
    </nav>
  );
}
