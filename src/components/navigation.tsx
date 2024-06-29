'use client';

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="">
            <Link className="" href="/" aria-current={pathname === '/'}>
                Dashboard
            </Link>
            <Link className="" href="/page1" aria-current={pathname === '/page1'}>
                Page 1
            </Link>
            <Link className="" href="/page2" aria-current={pathname === '/page2'}>
                Page 2
            </Link>
        </nav>

    )
}