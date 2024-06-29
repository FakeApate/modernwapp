'use client';
import FrameContent from "@/layout/frame_content"
import FrameHeader from "@/layout/frame_header"
import FramePane from "@/layout/frame_pane"
import Grid from '@mui/material/Grid'
function Frame({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Grid>
            <div color="">
                <FrameHeader />
                <main className="">
                    <div className="">
                        <div className="">
                            <FramePane />
                            <FrameContent>
                                {children}
                            </FrameContent>
                        </div>
                    </div>
                </main>
            </div>
        </Grid>
    )
}

export default Frame