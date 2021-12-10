import React from "react";
import { useHistory } from "react-router";
import "../../App.css";
import DosenComponent from "./DosenComponent";
import MahasiswaBimbinganComponent from "./MahasiswaBimbinganComponent";

const DetailDosen = (props) => {
  const history = useHistory();
  if (typeof props.location.props === "undefined") {
    history.push("/dosen");
  }
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
