'use client';

import { useRef, useState } from "react";
import Navigation from "@/components/navigation";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)

    return (
        <>
            <button ref={btnRef} id="sidemenu_btn" className="" onClick={() => {
                setIsOpen(!isOpen)
            }}>
                {/*<ThreeBarsIcon />*/}
            </button>
            <dialog id="sidemenu_dialog" ref={dialogRef} open={isOpen}
                className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                Pages
                            </div>
                        </div>
                        <button id="sidemenu_close_btn" className="" onClick={() => {
                            setIsOpen(false)
                        }}>
                           {/*  <XIcon />*/}
                        </button>
                    </div>
                </div>
                <div className="">
                    <Navigation />
                </div>
            </dialog>
        </>
    )
}
