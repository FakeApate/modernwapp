import { SplitPageLayout, Header, Text } from "@primer/react"
import MobileNavigation from "../components/mobile_navigation";

export default function FrameHeader() {
    return (
        <SplitPageLayout.Header padding="0">
            <Header
                sx={{
                    backgroundColor: 'canvas.inset',
                    height: '53px',
                    paddingRight: '8px'
                }}>
                <Header.Item full>
                    <Text sx={{
                        color: 'fg.default'
                    }}>
                        WAITM
                    </Text>
                </Header.Item>
                <Header.Item sx={{
                    marginRight: '0px'
                }}>
                    <MobileNavigation />
                </Header.Item>
            </Header>
        </SplitPageLayout.Header >
    );
}