import React from "react";

export default function ThermometerIcon() {
  return (
    <div className="TherometerIcon">
      <span
        style={{
          fontSize: "64px",
          position: "absolute",
          top: "-7px",
          left: "30px",
        }}
      >
        <i className="fas fa-thermometer-empty"></i>
      </span>
    </div>
  );
}
