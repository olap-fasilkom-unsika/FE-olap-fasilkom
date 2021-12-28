import React from "react";

const DateFormatter = ({date}) => {
  const unix = Date.parse(date);
  const milliseconds = unix; // 1575909015000
  const dateObject = new Date(milliseconds);
  // const humanDateFormat = dateObject.toLocaleString();
  const humanDateFormat = dateObject.toLocaleString("id-ID", {month: "long", day: 'numeric', year:'numeric'}) 
  
  return <>{humanDateFormat}</>;
};

export default DateFormatter;
