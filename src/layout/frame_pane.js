import { SplitPageLayout } from "@primer/react"
import Navigation from "../components/navigation"

export default function FramePane() {
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