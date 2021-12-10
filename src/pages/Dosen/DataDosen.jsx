import React, { Component } from "react";
import { Link } from "react-router-dom";
import DosenComponent from "./DosenComponent";
import DosenList from "./DosenList";

export class DataDosen extends Component {
  render() {
    return (
      <DosenComponent
        body={
          <>
            <h2 className="section-title">Data Dosen</h2>
            <p className="section-lead">
              Daftar Data Dosen Fakultas Ilmu Komputer.
            </p>

            <DosenList />
          </>
        }
      />
    );
  }
}

export default DataDosen;
