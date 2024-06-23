import { ThemeProvider, BaseStyles } from '@primer/react'

import Frame from './Frame'

function App() {
    return (
        <ThemeProvider colorMode='auto' dayScheme='light' nightScheme='dark'>
            <BaseStyles>
                <Frame />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
