import React from "react";

const DateFormatComponent = ({ date }) => {
  return typeof date === "undefined" ? "-" : date;
};

export default DateFormatComponent;
