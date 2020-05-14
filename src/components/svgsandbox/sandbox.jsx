import React from "react";
import "./sandbox.css";

const Sandbox = () => {
  return (
    <div className="canvas">
      <svg viewBox="0 0 300 300" width="300" height="300">
        <g fill="olive">
          <polygon points="0, 300 100, 100 175, 300" />
          <polygon points="100, 300 200, 140 300, 300" />
        </g>
        <ellipse cx="80" cy="50" rx="60" ry="15" fill="white" />
        <ellipse cx="100" cy="60" rx="30" ry="10" fill="white" />
        <ellipse cx="60" cy="40" rx="10" ry="10" fill="white" />
        <circle cx="240" cy="50" r="20" fill="gold" />
      </svg>
    </div>
  );
};

export default Sandbox;
