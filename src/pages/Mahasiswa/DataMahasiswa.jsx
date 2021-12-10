import React, { Component } from "react";
import { Link } from "react-router-dom";
import MahasiswaList from "./MahasiswaList";

export class DataMahasiswa extends Component {
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Mahasiswa</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <Link to=''>Manage</Link>
              </div>
              <div className="breadcrumb-item">
                <Link to=''>Mahasiswa</Link>
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
