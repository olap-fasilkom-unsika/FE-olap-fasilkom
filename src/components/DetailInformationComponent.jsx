import React from "react";

const DetailInformationComponent = ({ title, value }) => {
  value = value === "" ? "-" : value;
  return (
    <>
      <p className="card-text mb-0">{title}</p>
      <h6 className="card-title text-justify">{value}</h6>
      {/* <h6 className="card-title mb-0">{title}</h6>
      <p className="card-text text-justify">{value}</p> */}
    </>
  );
};

export default DetailInformationComponent;
