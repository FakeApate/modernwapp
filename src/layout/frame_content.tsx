'use client';
import { SplitPageLayout } from "@primer/react"

export default function FrameContent({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SplitPageLayout.Content
            width={"full"}
            padding="condensed"
            sx={{
                backgroundColor: 'var(--bgColor-inset)',
                minHeight: 'calc(100vh - 54px)'
            }}
        >
            {children}
        </SplitPageLayout.Content>
    );
}