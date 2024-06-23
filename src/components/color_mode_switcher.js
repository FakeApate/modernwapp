import { useTheme, ActionMenu, ActionList, Box, theme, useResizeObserver } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'
import { useRef, useState } from 'react'

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()
    const btnRef = useRef()
    const [menuWidth, setMenuWidth] = useState('100%')


    const setScheme = (schemeValue) => {
        setDayScheme(schemeValue)
        setNightScheme(schemeValue)
    }

    const schemes = Object.keys(theme.colorSchemes).map((scheme) => {
        return {
            name: scheme.substring(0, 1).toUpperCase() + scheme.substring(1).replaceAll('_', ' '),
            value: scheme,
            icon: scheme.includes('light') ? SunIcon : MoonIcon
        }
    })

    const current = schemes.find((scheme) => scheme.value === colorScheme)

    useResizeObserver(() => {
        const width = btnRef.current?.firstChild?.clientWidth
        setMenuWidth(width ?? '100%')
    })
    return (
        <Box padding="2" ref={btnRef}>
            <ActionMenu >
                <ActionMenu.Button
                    size="small"
                    sx={{
                        width: '100%',
                        bg: 'canvas.default'
                    }}>
                    <current.icon />
                    <Box
                        sx={{
                            display: 'inline-block',
                            ml: 2
                        }}>
                        {' '}
                        {current.name}
                    </Box>
                </ActionMenu.Button>
                <ActionMenu.Overlay
                    align='start'
                    sx={{
                        width: menuWidth
                    }}>
                    <ActionList showDividers>
                        <ActionList.Group selectionVariant="single">
                            {schemes.map((scheme) => (
                                <ActionList.Item
                                    key={scheme.value}
                                    href="#"
                                    selected={scheme.value === colorScheme}
                                    onSelect={() => setScheme(scheme.value)}
                                >
                                    {scheme.name}
                                </ActionList.Item>
                            ))}
                        </ActionList.Group>
                    </ActionList>
                </ActionMenu.Overlay>
            </ActionMenu>
        </Box>
    )
}

export default ColorModeSwitcher
