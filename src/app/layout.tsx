import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider, BaseStyles } from '@primer/react';
import Frame from "@/layout/frame";
import './global.scss'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ColorModeWithAuto } from '@primer/react/lib-esm/ThemeProvider';

export const metadata: Metadata = {
    title: 'Waitm',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')?.value ?? 'dark'
    var mode: ColorModeWithAuto = 'dark'
    var light_theme = 'light'
    var dark_theme = 'dark'
    if (theme.includes('light')) {
        mode = 'light'
        light_theme = theme
    }
    else {
        mode = 'dark'
        dark_theme = theme
    }
    return (
        <html className='js-focus-visible' data-js-focus-visible="">
            <body data-color-mode={mode} data-light-theme={light_theme} data-dark-theme={dark_theme}>
                <StyledComponentsRegistry>
                    <ThemeProvider colorMode={mode} dayScheme={light_theme} nightScheme={dark_theme}>
                    {/* @ts-ignore */ }
                        <BaseStyles>
                            <Frame>
                                {children}
                            </Frame>
                        </BaseStyles>
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}