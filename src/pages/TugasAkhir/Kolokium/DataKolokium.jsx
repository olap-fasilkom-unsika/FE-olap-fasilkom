import React, { Component } from "react";
import KolokiumComponent from "./KolokiumComponent";
import KolokiumList from "./KolokiumList";

export class DataKolokium extends Component {
  render() {
    return (
      <KolokiumComponent
      page={'Kolokium'}
        body={
          <>
            <h2 className="section-title">Data Kolokium</h2>
            <p className="section-lead">
              Daftar Data Kolokium Fakultas Ilmu Komputer.
            </p>

            <KolokiumList />
          </>
        }
      />
    );
  }
}

export default DataKolokium;
