import { Box } from '@primer/react'
import Image from 'next/image'
export default function Blank() {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center'
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Image
                    unoptimized={true}
                    src="/images/pixel_duck_final.gif"
                    alt="duck"
                    width={64}
                    height={64}
                />
                <h1 style={{ margin: '0px' }}>No content</h1>
                <p style={{ margin: '0px', color: 'var(--fgColor-neutral)' }}>
                    There is currently no content to display
                </p>
            </Box>
        </Box>
    )
}