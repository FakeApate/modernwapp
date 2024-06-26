import { SplitPageLayout } from "@primer/react"
import FrameContent from "@/layout/frame_content"
import FrameHeader from "@/layout/frame_header"
import FramePane from "@/layout/frame_pane"

function Frame({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SplitPageLayout
            sx={{
                bg: 'var(--bgColor-default)',
                minHeight: '100vh'
            }}>
            <FrameHeader />
            <FramePane />
            <FrameContent>
                {children}
            </FrameContent>
        </SplitPageLayout>
    )
}

export default Frame