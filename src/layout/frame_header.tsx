'use client';
import MobileNavigation from "@/components/mobile_navigation";

export default function FrameHeader() {
    return (
        <div className="">
            <header className="">
                <div className=""> WAITM </div>
                <div className="">
                    <MobileNavigation />
                </div>
            </header>
        </div>
    );
}