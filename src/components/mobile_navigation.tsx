"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Navigation from "@/components/navigation";
import XIcon from "@primer/octicons/build/svg/x-24.svg";
import ThreeBarsIconUrl from "@primer/octicons/build/svg/three-bars-24.svg";
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <button
        ref={btnRef}
        id="sidemenu_btn"
        className="btn-octicon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ThreeBarsIconUrl className="octicon" alt="toggle menu" />
      </button>
      <dialog id="sidemenu_dialog" ref={dialogRef} open={isOpen}>
        <div>
          <div>
            <div>
              <div>Pages</div>
            </div>
            <button
              id="sidemenu_close_btn"
              className="btn-octicon"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="octicon" alt="close" />
            </button>
          </div>
        </div>
        <div>
          <Navigation />
        </div>
      </dialog>
    </div>
  );
}
