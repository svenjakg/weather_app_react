import React from "react";

import PickThermometerIcon from "./PickThermometerIcon";

export default function ThermometerIcon(props) {
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
        <PickThermometerIcon temperature={props.celsiusTemperature} />
      </span>
    </div>
  );
}
