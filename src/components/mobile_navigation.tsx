'use client';

import { IconButton, useResponsiveValue, useOverlay } from "@primer/react"
import { Dialog, } from '@primer/react/experimental'
import { ThreeBarsIcon } from "@primer/octicons-react"
import { useRef, useState } from "react";
import Navigation from "./navigation";
import { Property } from 'csstype'

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false)
    const dialogRef = useRef<HTMLDivElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)
    const overlayProps = useOverlay({
        overlayRef: dialogRef,
        onClickOutside: () => setIsOpen(false),
        onEscape: () => setIsOpen(false),
        returnFocusRef: btnRef
    })

    return (
        <>
            <IconButton
                ref={btnRef}
                onClick={() => setIsOpen(true)}
                icon={ThreeBarsIcon}
                size='large'
                aria-label="Menu"
                sx={{
                    bg: 'canvas.inset',
                    visibility: useResponsiveValue<{
                        narrow: Property.Visibility,
                        regular: Property.Visibility,
                        wide: Property.Visibility
                    }, Property.Visibility>({
                        narrow: "visible",
                        regular: "hidden",
                        wide: "hidden"
                    }, "hidden")
                }}
            />
            {isOpen && (
                <Dialog
                    {...overlayProps}
                    ref={dialogRef}
                    title="Pages"
                    onClose={() => setIsOpen(false)}
                    position="left"
                    width="small"
                    role="dialog"
                    returnFocusRef={btnRef}
                    renderBody={() => {
                        return (
                            <Dialog.Body
                                sx={{
                                    display: 'block',
                                    height: '100%',
                                    padding: '8px'
                                }}>
                                <Navigation />
                            </Dialog.Body>
                        )
                    }}
                />
            )}
        </>
    )
}
