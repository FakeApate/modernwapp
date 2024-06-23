import { ActionList, Box } from "@primer/react"
import ColorModeSwitcher from './color_mode_switcher'

export default function Navigation() {
    const location = window.location.pathname
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
                <ActionList.LinkItem active={location === "/page1"} href="/page1">
                    Page 1
                </ActionList.LinkItem>
                <ActionList.LinkItem active={location === "/page2"} href="/page2">
                    Page 2
                </ActionList.LinkItem>
            </ActionList>
            <ColorModeSwitcher />
        </Box>
    )
}