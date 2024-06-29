
import Image from 'next/image'
export default function Blank() {
    return (
        <div>
            <div>
                <Image
                    unoptimized={true}
                    src="/images/pixel_duck_final.gif"
                    alt="duck"
                    width={64}
                    height={64}
                />
                <h1>No content</h1>
                <p>
                    There is currently no content to display
                </p>
            </div>
        </div>
    )
}