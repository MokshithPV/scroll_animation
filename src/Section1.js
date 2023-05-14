import React, { useEffect } from "react";

function Section1({ array }) {
  const [scroll, setScroll] = React.useState(0);
  var scroll2 = window.innerHeight / array.length;
  if (window.innerWidth < 400)
    scroll2 = (window.innerHeight / array.length) * 0.4;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(Math.floor(window.scrollY / scroll2));
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(Math.floor(window.scrollY / scroll2));
      });
    };
  });
  return (
    <div className="Section1">
      <div className="scroll">
        <div className="rela">
          {array.map((word, idx) => {
            if (idx + 1 <= scroll) {
              return (
                <span className="active">
                  {word}
                  &nbsp;
                </span>
              );
            } else {
              return (
                <span className="passive">
                  {word}
                  &nbsp;
                </span>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Section1;
