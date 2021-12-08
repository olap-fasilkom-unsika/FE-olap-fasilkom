import React, { Component } from "react";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";
import ModuleDataTable from "../../js/ModuleDataTable";
import { Data } from "./data";
import { NavLink } from "react-router-dom";
import DetailMahasiswa from "./DetailMahasiswa";
import MahasiswaList from "./MahasiswaList";

export class DataMahasiswa extends Component {
  // componentDidMount() {
  //   ProgressHeightWidth();
  //   ModuleDataTable();
  // }

  

  

  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Mahasiswa</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Manage</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Mahasiswa</a>
              </div>
              <div className="breadcrumb-item">Data Mahasiswa</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Data Mahasiswa</h2>
            <p className="section-lead">
              Daftar Data Mahasiswa Fakultas Ilmu Komputer.
            </p>

            <MahasiswaList />
          </div>
        </section>
      </div>
    );
  }
}

export default DataMahasiswa;
