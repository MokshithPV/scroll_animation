import React, { useEffect } from "react";
import work from "./work.png";
import vid1 from "./trim1_Trim.gif";
import vid2 from "./trim2_Trim.gif";
import vid3 from "./trim3_Trim.gif";

function Section2() {
  const [val, setVal] = React.useState("01");
  const [scroll, setScroll] = React.useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 3 * window.innerHeight) {
        setScroll(
          (400 * (window.scrollY - 2 * window.innerHeight)) / window.innerHeight
        );
      }
      if (window.scrollY < (7 * window.innerHeight) / 3) {
        setVal("01");
        document.querySelector(".sec21").style.display = "block";
        document.querySelector(".sec22").style.display = "none";
        document.querySelector(".sec23").style.display = "none";
      } else {
        if (window.scrollY < (8 * window.innerHeight) / 3) {
          setVal("02");
          document.querySelector(".sec21").style.display = "none";
          document.querySelector(".sec22").style.display = "block";
          document.querySelector(".sec23").style.display = "none";
        } else {
          setVal("03");
          document.querySelector(".sec21").style.display = "none";
          document.querySelector(".sec22").style.display = "none";
          document.querySelector(".sec23").style.display = "block";
        }
      }
    });
  });
  return (
    <div className="Section2">
      <div className="sticky">
        <div className="relative">
          <div className="sec2text">
            <div
              style={{ display: "flex", flexDirection: "row", height: "20px" }}
            >
              <img src={work} alt="logo"></img>
              Workflow
            </div>
            <h1>Create at the speed of thought.</h1>
            <p>
              Focus on your getting your thoughts out and crafting the best
              message while Chronicle does the heavy lifting for you
            </p>
          </div>
          <div className="sec2scroll">
            <div className="secte2 sec21" style={{ display: "block" }}>
              <img src={vid1} alt="animation1"></img>
            </div>
            <div className="secte2 sec22" style={{ display: "none" }}>
              <img src={vid2} alt="animation2"></img>
            </div>
            <div className="secte2 sec23" style={{ display: "none" }}>
              <img src={vid3} alt="animation3"></img>
            </div>
          </div>
          <div className="sec2line">
            <p className="p1">{val}</p>
            <div className="linescr">
              <span
                style={{
                  backgroundColor: "#c86aee",
                  height: `${scroll}px`,
                  width: "2px",
                  display: "block",
                }}
              ></span>
            </div>
            <p className="p2">03</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
