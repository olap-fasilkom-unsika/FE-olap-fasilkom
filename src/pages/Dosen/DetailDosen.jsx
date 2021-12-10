import React from "react";
import "../../App.css";
import DosenComponent from "./DosenComponent";
import MahasiswaBimbinganComponent from "./MahasiswaBimbinganComponent";

const DetailDosen = (props) => {
  return (
    <DosenComponent
      body={
        <div>
          <h2 className="section-title">Detail Dosen</h2>
          <MahasiswaBimbinganComponent id={props.location.props} />
        </div>
      }
    />
  );
};

export default DetailDosen;
