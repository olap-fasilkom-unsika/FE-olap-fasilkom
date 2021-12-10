import React, { Component } from "react";
import MahasiswaComponent from "./MahasiswaComponent";
import MahasiswaList from "./MahasiswaList";

export class DataMahasiswa extends Component {
  render() {
    return (
      <MahasiswaComponent
        body={
          <>
            <h2 className="section-title">Data Mahasiswa</h2>
            <p className="section-lead">
              Daftar Data Mahasiswa Fakultas Ilmu Komputer.
            </p>

            <MahasiswaList />
          </>
        }
      />
    );
  }
}

export default DataMahasiswa;
