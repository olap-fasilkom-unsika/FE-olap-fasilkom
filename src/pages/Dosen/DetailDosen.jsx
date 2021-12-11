import React from "react";
import { useHistory } from "react-router";
import "../../App.css";
import CardDataDosenComponent from "../../components/CardComponent/CardDataDosenComponent";
import DosenComponent from "./DosenComponent";
import BebanDosenComponent from "./BebanDosenComponent";
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
          <CardDataDosenComponent id={props.location.props} />
          <BebanDosenComponent id={props.location.props} />
          <MahasiswaBimbinganComponent id={props.location.props} />
        </div>
      }
    />
  );
};

export default DetailDosen;
