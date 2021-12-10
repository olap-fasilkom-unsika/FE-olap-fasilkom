import React, { Component } from "react";
import { Link } from "react-router-dom";
import DosenList from "./DosenList";

export class DataDosen extends Component {
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dosen</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <Link to="">Manage</Link>
              </div>
              <div className="breadcrumb-item">
                <Link to="">Dosen</Link>
              </div>
              <div className="breadcrumb-item">Data Dosen</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Data Dosen</h2>
            <p className="section-lead">
              Daftar Data Dosen Fakultas Ilmu Komputer.
            </p>

            <DosenList />
          </div>
        </section>
      </div>
    );
  }
}

export default DataDosen;
