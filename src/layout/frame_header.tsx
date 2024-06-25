'use client';
import { SplitPageLayout, Header, Text } from "@primer/react"
import MobileNavigation from "../components/mobile_navigation";

export default function FrameHeader() {
    return (
        <SplitPageLayout.Header padding="none">
            <Header
                sx={{
                    backgroundColor: 'var(--bgColor-inset)',
                    height: '53px',
                    paddingRight: '8px'
                }}>
                <Header.Item full>
                    <Text className="fgColor-default">
                        WAITM
                    </Text>
                </Header.Item>
                <Header.Item className="mr-0">
                    <MobileNavigation />
                </Header.Item>
            </Header>
        </SplitPageLayout.Header >
    );
}