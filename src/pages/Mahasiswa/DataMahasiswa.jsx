import React, { Component } from "react";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";
import ModuleDataTable from "../../js/ModuleDataTable";
import { Data } from "./data";
import { NavLink } from "react-router-dom";
import DetailMahasiswa from "./DetailMahasiswa";

export class DataMahasiswa extends Component {
  componentDidMount() {
    ProgressHeightWidth();
    ModuleDataTable();
  }

  handleClick(imhs) {
    
    this.props.history.push('/mahasiswa/detail')
  }

  render() {
    return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Mahasiswa</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active">
                <a href="#">Manage</a>
              </div>
              <div class="breadcrumb-item">
                <a href="#">Mahasiswa</a>
              </div>
              <div class="breadcrumb-item">Data Mahasiswa</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">Data Mahasiswa</h2>
            <p class="section-lead">
              Daftar Data Mahasiswa Fakultas Ilmu Komputer.
            </p>

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Tabel Data Mahasiswa</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table" id="table-1">
                        <thead>
                          <tr>
                            <th class="text-center">No</th>
                            <th>NPM</th>
                            <th>Nama</th>
                            <th>No. HP</th>
                            <th>Tahun Masuk</th>
                            <th>Program Studi</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Data.mahasiswa.map((mhs, imhs) => {
                            let statusComponent;
                            if (mhs.status === "1") {
                              statusComponent = (
                                <div class="badge badge-warning">Proposal</div>
                              );
                            } else if (mhs.status === "2") {
                              statusComponent = (
                                <div class="badge badge-info">Kolokium</div>
                              );
                            } else if (mhs.status === "3") {
                              statusComponent = (
                                <div class="badge badge-success">Yudisium</div>
                              );
                            }

                            return (
                              <tr>
                                <td>{imhs + 1}</td>
                                <td>{mhs.npm}</td>
                                <td>{mhs.nama}</td>
                                <td>{mhs.no_hp}</td>
                                <td>{mhs.tahun_masuk}</td>
                                <td>{mhs.program_studi}</td>
                                <td>{statusComponent}</td>
                                <td>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    onClick={() => this.handleClick(imhs)}
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

export default DataMahasiswa;
