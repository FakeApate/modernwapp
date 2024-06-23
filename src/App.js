import { ThemeProvider, BaseStyles } from '@primer/react'

import Frame from './layout/frame'
import Blank from "./pages/Blank";

function App() {
    return (
        <ThemeProvider colorMode='auto' dayScheme='light' nightScheme='dark'>
            <BaseStyles>
                <Frame>
                    <Blank />
                </Frame>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
