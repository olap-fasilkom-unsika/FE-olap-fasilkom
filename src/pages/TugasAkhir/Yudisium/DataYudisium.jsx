import React, { Component } from "react";
import YudisiumComponent from "./YudisiumComponent";
import YudisiumList from "./YudisiumList";

export class DataYudisium extends Component {
  render() {
    return (
      <YudisiumComponent
      page={'Yudisium'}
        body={
          <>
            <h2 className="section-title">Data Yudisium</h2>
            <p className="section-lead">
              Daftar Data Yudisium Fakultas Ilmu Komputer.
            </p>

            <YudisiumList />
          </>
        }
      />
    );
  }
}

export default DataYudisium;
