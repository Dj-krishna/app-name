import React, { useEffect, useState } from "react";
import "../../App.css";
import { MAX, MIN } from "../Constants";
type ProgressBarProps = {
  value: any;
  onComplete: any;
};
function ProgressBar({ value = 0, onComplete }: ProgressBarProps) {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <>
      <div className="papp">Progress Bar</div>
      <div className="progress">
        <span style={{ color: percent > 49 ? "white" : "black" }}>
          {percent.toFixed()}%
        </span>
        <div
          className="div"
          //   style={{ width: `${percent}%` }}
          style={{
            transform: `scaleX(${percent / MAX})`,
            transformOrigin: "left",
          }}
          role="progressbar"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={percent.toFixed()}
        />
      </div>
    </>
  );
}

export default ProgressBar;
