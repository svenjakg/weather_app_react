import React from "react";

export default function DisplayDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDate = new Date(props.date * 1000);

  let minutes = formattedDate.getMinutes();
  let hours = formattedDate.getHours();
  let day = days[formattedDate.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {day}, {hours}:{minutes}
    </div>
  );
}
