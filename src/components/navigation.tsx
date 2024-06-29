"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav>
      <menu>
        <li>
          <Link href="/" aria-current={pathname === "/"}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/page1" aria-current={pathname === "/page1"}>
            Page 1
          </Link>
        </li>
        <li>
          <Link href="/page2" aria-current={pathname === "/page2"}>
            Page 2
          </Link>
        </li>
      </menu>
    </nav>
  );
}
