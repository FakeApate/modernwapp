'use client'
import FrameContent from '@/layout/frame_content'
import FrameHeader from '@/layout/frame_header'
import FramePane from '@/layout/frame_pane'
function Frame({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <FrameHeader />
            <FramePane />
            <FrameContent>{children}</FrameContent>
        </div>
    )
}

export default Frame
