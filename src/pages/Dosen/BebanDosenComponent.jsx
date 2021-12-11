import React from "react";
import BebanKolokiumComponent from "./BebanKolokiumComponent";
import BebanSemproComponent from "./BebanSemproComponent";

const BebanDosenComponent = ({ id }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <BebanSemproComponent id={id} />
      </div>
      <div className="col-lg-6">
        <BebanKolokiumComponent id={id} />
      </div>
    </div>
  );
};

export default BebanDosenComponent;
