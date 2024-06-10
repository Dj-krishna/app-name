import React from "react";

type ProgessBarProps = {
  percentage: any;
  cw: any;
};
function CircleProgressBar({ percentage, cw }: ProgessBarProps) {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div>
      <svg width={cw} height={cw} viewBox={`0 0 ${cw} ${cw}`}>
        <defs>
          <linearGradient id="gradient">
            <stop offset={"10%"} stop-color="#12c2e9" />
            <stop offset={"50%"} stop-color="#c471ed" />
            <stop offset={"100%"} stop-color="#f64f59" />
          </linearGradient>
        </defs>
        <circle
          cx={cw / 2}
          cy={cw / 2}
          strokeWidth={"15px"}
          r={radius}
          className="circle-bg"
        />
        <circle
          cx={cw / 2}
          cy={cw / 2}
          strokeWidth={"15px"}
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${cw / 2} ${cw / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
          fill="url(#gradient)"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircleProgressBar;
