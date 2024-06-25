'use client';
import styled, { } from 'styled-components'
import { SplitPageLayout, Box, PageLayout, useResponsiveValue } from "@primer/react"
import Navigation from "../components/navigation"

export default function FramePane() {
    return (
        <SplitPageLayout.Pane
            padding="normal"
            position="start"
            divider= "none"
            resizable={false}
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
            <Box
            sx={{
                height: '100%',
                display: 'block',
                position: 'absolute',
                width: 1,
                backgroundColor: 'border.default',
                top: 0,
                left: "100%"
            }}
        />
        </SplitPageLayout.Pane>
    )
}