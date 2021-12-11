import React from "react";
import "../../App.css";
import CardYudisiumComponent from "../../components/CardComponent/CardYudisiumComponent";
import CardProposalComponent from "../../components/CardComponent/CardProposalComponent";
import CardSkripsiComponent from "../../components/CardComponent/CardSkripsiComponent";
import MahasiswaComponent from "./MahasiswaComponent";
import { useHistory } from "react-router";
import CardDataMahasiswaComponent from "./CardDataMahasiswaComponent";

const DetailMahasiswa = (props) => {
  const history = useHistory();
  if (typeof props.location.props === "undefined") {
    history.push("/mahasiswa");
  }
  return (
    <MahasiswaComponent
      body={
        <>
          <h2 className="section-title">Detail Mahasiswa</h2>
          <CardDataMahasiswaComponent id={props.location.props} />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <CardProposalComponent id={props.location.props} />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <CardSkripsiComponent id={props.location.props} />
              <CardYudisiumComponent id={props.location.props} />
            </div>
          </div>
        </>
      }
    />
  );
};

export default DetailMahasiswa;
