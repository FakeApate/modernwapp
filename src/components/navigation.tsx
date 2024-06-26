'use client';

import { ActionList, Box } from "@primer/react"
import ColorModeSwitcher from '@/components/color_mode_switcher'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}>
            <ActionList
                sx={{
                    flexGrow: '1'
                }}>
                <ActionList.LinkItem href="/" active={pathname === '/'}>
                    Dashboard
                </ActionList.LinkItem>
                <ActionList.LinkItem href="/page1" active={pathname === '/page1'}>
                    Page 1
                </ActionList.LinkItem>
                <ActionList.LinkItem href="/page2" active={pathname === '/page2'}>
                    Page 2
                </ActionList.LinkItem>
            </ActionList>
            <ColorModeSwitcher />
        </Box>
    )
}