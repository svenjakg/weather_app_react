import React from "react";

export default function PickThermometerIcon(props) {
  if (props.temperature <= 0) {
    return (
      <div className="PickThermometerIcon">
        <i className="fas fa-thermometer-empty"></i>
      </div>
    );
  } else {
    if (0 < props.temperature && props.temperature <= 10) {
      return (
        <div className="PickThermometerIcon">
          <i className="fas fa-thermometer-quarter"></i>
        </div>
      );
    } else {
      if (10 < props.temperature && props.temperature <= 20) {
        return (
          <div className="PickThermometerIcon">
            <i className="fas fa-thermometer-half"></i>
          </div>
        );
      } else {
        if (20 < props.temperature && props.temperature <= 30) {
          return (
            <div className="PickThermometerIcon">
              <i className="fas fa-thermometer-three-quarters"></i>
            </div>
          );
        } else {
          return (
            <div className="PickThermometerIcon">
              <i className="fas fa-thermometer-full"></i>
            </div>
          );
        }
      }
    }
  }
}
