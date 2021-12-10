import React from "react";
import "../../App.css";
import CardDataMahasiswaComponent from "../../components/CardComponent/CardDataMahasiswaComponent";
import CardYudisiumComponent from "../../components/CardComponent/CardYudisiumComponent";
import CardProposalComponent from "../../components/CardComponent/CardProposalComponent";
import CardSkripsiComponent from "../../components/CardComponent/CardSkripsiComponent";
import MahasiswaComponent from "./MahasiswaComponent";


const DetailMahasiswa = (props) => {
  return (
    <MahasiswaComponent
      body={
        <>
          <h2 className="section-title">Detail Mahasiswa</h2>
          <CardDataMahasiswaComponent id={props.location.props} />
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <CardProposalComponent />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <CardSkripsiComponent />
              <CardYudisiumComponent />
            </div>
          </div>
        </>
      }
    />
  );
};

export default DetailMahasiswa;
