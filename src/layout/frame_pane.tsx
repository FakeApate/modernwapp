"use client";

import Navigation from "@/components/navigation";
import ColorModeSwitcher from "@/components/color_mode_switcher";

export default function FramePane() {
  return (
    <aside>
      <Navigation />
      <ColorModeSwitcher />
    </aside>
  );
}
