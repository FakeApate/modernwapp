import { setCookie } from '@/app/actions'
import './color_mode_switcher.module.scss'
import { useState } from 'react'

function ColorModeSwitcher() {
    const [isOpen, setIsOpen] = useState(false)

    const schemes = Object.keys({
        dark: 'theme.colorSchemes.dark',
        light: 'theme.colorSchemes.light',
    }).map((scheme) => {
        return {
            name:
                scheme.substring(0, 1).toUpperCase() +
                scheme.substring(1).replaceAll('_', ' '),
            value: scheme,
            icon: scheme.includes('light') ? 'SunIcon' : 'MoonIcon',
        }
    })

    return (
        <div>
            <div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {'<current.icon />'}
                    <div> {'current.name'}</div>
                </button>
                {isOpen && (
                    <div>
                        <div>
                            {schemes.map((scheme) => (
                                <div
                                    key={scheme.value}
                                    onClick={() => {
                                        'setScheme(scheme.value)'
                                        setCookie(scheme.value)
                                    }}
                                >
                                    {scheme.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ColorModeSwitcher
