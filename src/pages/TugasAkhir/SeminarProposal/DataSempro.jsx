import React, { Component } from "react";
import SemproComponent from "./SemproComponent";
import SemproList from "./SemproList";

export class DataSempro extends Component {
  render() {
    return (
      <SemproComponent
      page={'Seminar Proposal'}
        body={
          <>
            <h2 className="section-title">Data Seminar Proposal</h2>
            <p className="section-lead">
              Daftar Data Seminar Proposal Fakultas Ilmu Komputer.
            </p>

            <SemproList />
          </>
        }
      />
    );
  }
}

export default DataSempro;
