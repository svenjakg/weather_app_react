import React from "react";

export default function FormattedTime(props) {
  let formattedTime = new Date(props.time * 1000);

  let minutes = formattedTime.getMinutes();
  let hours = formattedTime.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div className="FormattedTime">
      {hours}:{minutes}
    </div>
  );
}
