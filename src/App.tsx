import { useState } from "react";
import "./App.css";
import Table from "./Table";
import CircleProgressBar from "./components/CircleProgressBar";

function App() {
  const [percentage, setPercentage] = useState("35");
  return (
    <div className="App">
      <CircleProgressBar percentage={percentage} cw={"200"} />
      <input
        type="range"
        min={"1"}
        max={"100"}
        step={"1"}
        value={percentage}
        className="progress-input"
        onChange={(e) => setPercentage(e.target.value)}
      />
    </div>
  );
}

export default App;
