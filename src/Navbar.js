import React, { useEffect } from "react";
import logo from "./logo.png";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 2 * window.innerHeight) {
        document.querySelector(".sec1").style.backgroundColor = "white";
        document.querySelector(".sec1").style.color = "black";
        document.querySelector(".sec2").style.backgroundColor = "black";
        document.querySelector(".sec2").style.color = "white";
      } else {
        document.querySelector(".sec1").style.backgroundColor = "black";
        document.querySelector(".sec1").style.color = "white";
        document.querySelector(".sec2").style.backgroundColor = "white";
        document.querySelector(".sec2").style.color = "black";
      }
    });
  });
  return (
    <div className="Navbar">
      <div
        className="scroll-to-top"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={logo} style={{ height: "120%", width: "80%" }}></img>
      </div>
      <ul>
        <li
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="sec1"
        >
          Section 1
        </li>
        <li
          onClick={() => {
            window.scrollTo(0, 2 * window.innerHeight);
          }}
          className="sec2"
        >
          Section 2
        </li>
      </ul>
      <div>
        <button className="button">Join Beta</button>
      </div>
    </div>
  );
}

export default Navbar;
