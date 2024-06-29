
import { SunIcon, MoonIcon } from '@primer/octicons-react'
import { setCookie } from '@/app/actions'
import classes from './color_mode_switcher.module.scss'
import { useState } from 'react'

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    const setScheme = (schemeValue: string) => {
        setDayScheme(schemeValue)
        setNightScheme(schemeValue)
    }

    const schemes = Object.keys({'dark':theme.colorSchemes.dark, 'light':theme.colorSchemes.light}).map((scheme) => {
        return {
            name: scheme.substring(0, 1).toUpperCase() + scheme.substring(1).replaceAll('_', ' '),
            value: scheme,
            icon: scheme.includes('light') ? SunIcon : MoonIcon
        }
    })

    const current = schemes.find((scheme) => scheme.value === colorScheme) ?? schemes[0]


    return (
        <Box padding="2">
            <div >
                <button className='' onClick={() => setIsOpen(!isOpen)}>
                    <current.icon />
                    <Box className={classes.color_selector_name}>
                        {' '}
                        {current.name}
                    </Box>
                </button>
                {isOpen && (
                    <div>
                        <div >
                            {schemes.map((scheme) => (
                                <div className={classes.dropdown_content_item}
                                    key={scheme.value}
                                    //selected={scheme.value === colorScheme}
                                    onClick={() => {
                                        setScheme(scheme.value)
                                        setCookie(scheme.value)
                                    }
                                    }
                                >
                                    {scheme.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Box>
    )
}

export default ColorModeSwitcher
