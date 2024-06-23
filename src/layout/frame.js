import { SplitPageLayout } from "@primer/react"
import FrameContent from "./frame_content"
import FrameHeader from "./frame_header"
import FramePane from "./frame_pane"

function Frame({ children }) {
    return (
        <SplitPageLayout
            sx={{
                bg: 'canvas.default',
                minHeight: 'calc(100vh)'
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