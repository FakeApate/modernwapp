import * as React from 'react';
import Frame from "@/layout/frame";
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';

export const metadata: Metadata = {
    title: 'Waitm',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = cookies()
    const themeC = cookieStore.get('theme')?.value ?? 'dark'
    var mode = 'dark'
    var light_theme = 'light'
    var dark_theme = 'dark'
    if (themeC.includes('light')) {
        mode = 'light'
        light_theme = themeC
    }
    else {
        mode = 'dark'
        dark_theme = themeC
    }
    return (
        <html className='js-focus-visible' data-js-focus-visible="">
            <body data-color-mode={mode} data-light-theme={light_theme} data-dark-theme={dark_theme}>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Frame>
                            {children}
                        </Frame>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}