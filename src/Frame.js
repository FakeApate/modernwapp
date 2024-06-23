import { SplitPageLayout, Header as FrameHeader, ActionList, Box, IconButton, useResponsiveValue, useOverlay } from "@primer/react"
import { Dialog, } from '@primer/react/experimental'
import { ThreeBarsIcon } from "@primer/octicons-react"
import ColorModeSwitcher from './ColorModeSwitcher'
import Blank from "./Blank";
import { useRef, useState } from "react";

function Frame() {
    return (
        <SplitPageLayout
            sx={{
                bg: 'canvas.default',
                minHeight: 'calc(100vh)'
            }}>
            <Header />
            <Pane />
            <Content />
        </SplitPageLayout>
    )
}

function Header() {
    return (
        <SplitPageLayout.Header padding="0">
            <FrameHeader
                sx={{
                    backgroundColor: 'canvas.inset',
                    height: '53px',
                    paddingRight: '8px'
                }}>
                <FrameHeader.Item full>
                    WAITM
                </FrameHeader.Item>
                <FrameHeader.Item sx={{
                    marginRight: '0px'
                }}>
                    <MobileMenu />
                </FrameHeader.Item>
            </FrameHeader>
        </SplitPageLayout.Header >
    );
}

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const dialogRef = useRef()
    const btnRef = useRef()
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
                size="large"
                aria-label="Menu"
                sx={{
                    bg: 'canvas.inset',
                    visibility: useResponsiveValue({
                        narrow: 'visible',
                        regular: 'hidden',
                        wide: 'hidden'
                    }, 'hidden')
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
    /*return (
        <>
            <IconButton
                ref={returnFocusRef}
                onClick={() => setIsOpen(true)}
                icon={ThreeBarsIcon}
                size="large"
                aria-label="Menu"
                sx={{
                    bg: 'canvas.inset',
                    visibility: useResponsiveValue({
                        narrow: 'visible',
                        regular: 'hidden',
                        wide: 'hidden'
                    }, 'hidden')
                }}
            />
            <Dialog
                isOpen={isOpen}
                onDismiss={() => setIsOpen(false)}
                aria-label="Mobile Menu"
            >
                <Box p={3}>
                    <Text>Some content</Text>
                </Box>
            </Dialog>
        </>
    )*/
}

function Pane() {
    return (
        <SplitPageLayout.Pane
            padding="1"
            position={{
                narrow: "end",
                regular: "start",
                wide: "start"
            }}
            hidden={{
                narrow: true,
                regular: false,
                wide: false
            }}
            sticky={true}
            sx={{
                minHeight: 'calc(100vh - 54px)'
            }}
            aria-label="Sidepanel"
        >
            <Navigation />
        </SplitPageLayout.Pane>
    )
}

function Navigation() {
    const location = window.location.pathname
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}>
            <ActionList
                sx={{
                    flexGrow: '1'
                }}>
                <ActionList.LinkItem active={location === "/page1"} href="/page1">
                    Page 1
                </ActionList.LinkItem>
                <ActionList.LinkItem active={location === "/page2"} href="/page2">
                    Page 2
                </ActionList.LinkItem>
            </ActionList>
            <ColorModeSwitcher />
        </Box>
    )
}

function Content() {
    return (
        <SplitPageLayout.Content
            width={"full"}
            padding="condensed"
            sx={{
                backgroundColor: 'canvas.inset',
                minHeight: 'calc(100vh - 54px)'
            }}
        >
            <Blank />
        </SplitPageLayout.Content>
    );
}

export default Frame