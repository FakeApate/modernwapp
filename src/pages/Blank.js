import { Box } from '@primer/react'
import { Blankslate } from '@primer/react/experimental'
import MonaLoadingImage from '../images/mona-loading-default.gif'

export default function Blank() {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%'
                }}
            >
                <Blankslate spacious>
                    <Blankslate.Visual>
                        <img
                            src={MonaLoadingImage}
                            alt="mona"
                            width={48}
                            height={48}
                        />
                    </Blankslate.Visual>
                    <Blankslate.Heading as='h1'>No content</Blankslate.Heading>
                    <Blankslate.Description>
                        There is currently no content to display
                    </Blankslate.Description>
                </Blankslate>
            </Box>
        </Box>
    )
}