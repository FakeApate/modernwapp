"use client";
import MobileNavigation from "@/components/mobile_navigation";

export default function FrameHeader() {
  return (
    <header className="Header">
      <div className="Header-item Header-item--full">
        <h4>Modern Web App</h4>
      </div>
      <div className="Header-item">
        <MobileNavigation />
      </div>
    </header>
  );
}
