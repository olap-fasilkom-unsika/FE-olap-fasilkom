import React, { Component } from "react";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";
import ModuleDataTable from "../../js/ModuleDataTable";
import { Data } from "./data";
import { NavLink } from "react-router-dom";
import CompGallery from "../Components/CompGallery";

export class SeminarProposal extends Component {
  componentDidMount() {
    ProgressHeightWidth();
    ModuleDataTable();
  }

  handleClick(imhs) {
    this.props.history.push("/mahasiswa/detail");
  }

  render() {
    return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Jadwal Kegiatan</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active">
                <a href="#">Manage</a>
              </div>
              <div class="breadcrumb-item">
                <a href="#">Jadwal Kegiatan</a>
              </div>
              <div class="breadcrumb-item">Seminar Proposal</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">Seminar Proposal</h2>
            <p class="section-lead">
              Daftar Jadwal Seminar Proposal Fakultas Ilmu Komputer.
            </p>

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Jadwal Seminar</h4>
                  </div>
                  <div class="card-body">
                    <div className="row mb-3">
                      <div className="col-lg-4 mb-3">
                        <div class="dropdown d-inline mr-2">
                          <button
                            class="btn btn-primary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Gelombang
                          </button>
                          <div class="dropdown-menu">
                            <a class="dropdown-item">Gelombang 1</a>
                            <a class="dropdown-item">Gelombang 2</a>
                            <a class="dropdown-item">Gelombang 3</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <h6 class="card-title mb-0">Tanggal Pelaksanaan</h6>
                        <p class="card-text">08/11/2021</p>
                      </div>
                      <div className="col-lg-4">
                        <h6 class="card-title mb-0">Tempat Pelaksanaan</h6>
                        <p class="card-text">
                          Aula Universitas Singaperbangsa Karawang
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div class="table-responsive">
                      <table class="table" id="table-1">
                        <thead>
                          <tr>
                            <th class="text-center">No</th>
                            <th>Mahasiswa</th>
                            <th>Judul</th>
                            <th>Dosen Pembimbing</th>
                            <th>Dosen Penguji</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data.proposal.map((prpsl, iprpsl) => {
                            let statusComponent;
                            if (prpsl.status_proposal === "0") {
                              statusComponent = (
                                <div class="badge badge-danger">
                                  Belum disetujui
                                </div>
                              );
                            } else if (prpsl.status_proposal === "1") {
                              statusComponent = (
                                <div class="badge badge-success">Disetujui</div>
                              );
                            }

                            return (
                              <tr>
                                <td>{iprpsl + 1}</td>
                                <td>{prpsl.mahasiswa}</td>
                                <td>{prpsl.judul}</td>
                                <td>{prpsl.dosen_pembimbing}</td>
                                <td>{prpsl.dosen_penguji}</td>
                                <td>{statusComponent}</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={() => this.handleClick(iprpsl)}
                                  >
                                    Detail
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SeminarProposal;
