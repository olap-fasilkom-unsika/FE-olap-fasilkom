import React from "react";
import { Link } from "react-router-dom";

const YudisiumComponent = ({ body, page }) => {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Tugas Akhir</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <Link to="">Manage</Link>
            </div>
            <div className="breadcrumb-item">
              <Link to="/sempro">Tugas Akhir</Link>
            </div>
            <div className="breadcrumb-item">{page}</div>
          </div>
        </div>

        <div className="section-body">{body}</div>
      </section>
    </div>
  );
};

export default YudisiumComponent;
