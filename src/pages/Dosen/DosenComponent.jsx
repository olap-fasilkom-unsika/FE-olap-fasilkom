import React from "react";
import { Link } from "react-router-dom";

const DosenComponent = ({ body }) => {
  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Dosen</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <Link to=''>Manage</Link>
            </div>
            <div className="breadcrumb-item">
              <Link to=''>Dosen</Link>
            </div>
            <div className="breadcrumb-item">Detail Dosen</div>
          </div>
        </div>

        <div className="section-body">{body}</div>
      </section>
    </div>
  );
};

export default DosenComponent;
