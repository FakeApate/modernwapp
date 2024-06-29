'use client'

import { useRef, useState } from 'react'
import Navigation from '@/components/navigation'

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)

    return (
        <div>
            <button
                ref={btnRef}
                id="sidemenu_btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                {'<ThreeBarsIcon />'}
            </button>
            <dialog id="sidemenu_dialog" ref={dialogRef} open={isOpen}>
                <div>
                    <div>
                        <div>
                            <div>Pages</div>
                        </div>
                        <button
                            id="sidemenu_close_btn"
                            onClick={() => setIsOpen(false)}
                        >
                            {'<XIcon />'}
                        </button>
                    </div>
                </div>
                <div>
                    <Navigation />
                </div>
            </dialog>
        </div>
    )
}
