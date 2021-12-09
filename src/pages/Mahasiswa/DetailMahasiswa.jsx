import React from "react";
import "../../App.css";
import CardDataMahasiswaComponent from "../../components/CardComponent/CardDataMahasiswaComponent";
import CardYudisiumComponent from "../../components/CardComponent/CardYudisiumComponent";
import CardProposalComponent from "../../components/CardComponent/CardProposalComponent";
import CardSkripsiComponent from "../../components/CardComponent/CardSkripsiComponent";
import { Link } from "react-router-dom";

const DetailMahasiswa = (props) => {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Mahasiswa</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <Link>Manage</Link>
            </div>
            <div className="breadcrumb-item">
              <Link>Mahasiswa</Link>
            </div>
            <div className="breadcrumb-item">Detail Mahasiswa</div>
          </div>
        </div>

        <div className="section-body">
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
        </div>
      </section>
    </div>
  );
};

export default DetailMahasiswa;
