import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";

function App() {
  const a =
    "In Chronicle everything is made with blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing everything from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
  const arr = a.split(" ");
  return (
    <div className="App">
      <Navbar />
      <Section1 array={arr} />
      <Section2 />
    </div>
  );
}

export default App;
