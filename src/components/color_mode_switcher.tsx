import { useTheme, ActionMenu, ActionList, Box, theme } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'
import { setCookie } from '@/app/actions'

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()


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

    const current = schemes.find((scheme) => scheme.value === colorScheme) ?? schemes[0]

    
    return (
        <Box padding="2">
            <ActionMenu >
                <ActionMenu.Button
                    className='bgColor-default width-full'
                    size="small">
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
                        width: '100%'
                    }}>
                    <ActionList showDividers>
                        <ActionList.Group selectionVariant="single">
                            {schemes.map((scheme) => (
                                <ActionList.Item
                                    key={scheme.value}
                                    selected={scheme.value === colorScheme}
                                    onSelect={() => {
                                        setScheme(scheme.value)
                                        setCookie(scheme.value)
                                    }
                                }
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
