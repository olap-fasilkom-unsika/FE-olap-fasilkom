import React from "react";

const DetailInformationComponent = ({title, value}) => {
  value = value === '' ? '-' : value;
  return (
    <>
      <h6 className="card-title mb-0">{title}</h6>
      <p className="card-text text-justify">{value}</p>
    </>
  );
};

export default DetailInformationComponent;
