import { SplitPageLayout } from "@primer/react"


export default function FrameContent({ children }) {
    return (
        <SplitPageLayout.Content
            width={"full"}
            padding="condensed"
            sx={{
                backgroundColor: 'canvas.inset',
                minHeight: 'calc(100vh - 54px)'
            }}
        >
            {children}
        </SplitPageLayout.Content>
    );
}