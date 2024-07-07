"use client";

function W3TopContainer({
  display,
  setDisplay,
}: {
  display: string;
  setDisplay: (state: string) => void;
}) {
  function w3_open() {
    if (display === "block") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }
  return (
    <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
      <button
        className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
        onClick={w3_open}
      >
        <i className="fa fa-bars"></i> Menu
      </button>
      <span className="w3-bar-item w3-right">Logo</span>
    </div>
  );
}

export default W3TopContainer;
