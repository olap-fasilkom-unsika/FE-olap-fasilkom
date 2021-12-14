import React from "react";

const DetailInformationComponent = ({ title, value }) => {
  value = value === "" || typeof value === "undefined" ? "-" : value;
  return (
    <>
      <p className="card-text mb-0">{title}</p>
      <h6 className="card-title text-justify">{value}</h6>
    </>
  );
};

export default DetailInformationComponent;
