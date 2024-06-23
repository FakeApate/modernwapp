import { Box } from '@primer/react'
import { Blankslate } from '@primer/react/experimental'
import DuckLoadingImage from '../images/pixel_duck_final.gif'

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
                            src={DuckLoadingImage}
                            alt="duck"
                            width={64}
                            height={64}
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