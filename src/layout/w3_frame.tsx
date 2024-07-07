"use client";
import { useState } from "react";

import W3TopContainer from "@/components/w3_top_container";
import W3Sidebar from "@/components/w3_sidebar";

function W3Frame({ children }: { children: React.ReactNode }) {
  const [display, setDisplay] = useState("none");
  return (
    <>
      <W3TopContainer display={display} setDisplay={setDisplay} />
      <W3Sidebar display={display} setDisplay={setDisplay} />
      <div
        className="w3-main"
        style={{ marginLeft: "300px", marginTop: "43px" }}
      >
        {children}
      </div>
    </>
  );
}

export default W3Frame;
