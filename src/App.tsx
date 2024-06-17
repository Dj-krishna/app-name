import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import CircleProgressBar from "./components/CircleProgressBar";
import ProgressBar from "./components/StepByStepProgressBar/ProgressBar";
import GridLayout from "./components/3BY3Grid/GridLayout";

function App() {
  const [percentage, setPercentage] = useState("35");
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val: any) => val + 1);
    }, 100);
  }, []);

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
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete!" : "Loading..."}</span>
      <GridLayout />
    </div>
  );
}

export default App;
