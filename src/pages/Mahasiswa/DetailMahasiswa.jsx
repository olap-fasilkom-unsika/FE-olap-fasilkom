import React, { Component } from "react";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";
import ModuleDataTable from "../../js/ModuleDataTable";
import { Data } from "./data";
import "../../App.css";

export class DetailMahasiswa extends Component {
  componentDidMount() {
    ProgressHeightWidth();
    ModuleDataTable();
  }

  detailInformation(title, value) {
    return (
      <>
        <h6 class="card-title mb-0">{title}</h6>
        <p class="card-text">{value}</p>
      </>
    );
  }

  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Mahasiswa</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Manage</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Mahasiswa</a>
              </div>
              <div className="breadcrumb-item">Detail Mahasiswa</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Detail Mahasiswa</h2>
            <p className="section-lead">
              Daftar Detail Mahasiswa Fakultas Ilmu Komputer.
            </p>
            <div className="box"></div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Proposal</h4>
                  </div>
                  <div className="card-body">
                    {this.detailInformation("Judul", Data.proposal[0].judul)}
                    {this.detailInformation(
                      "Deskripsi",
                      Data.proposal[0].deskripsi
                    )}
                    {this.detailInformation(
                      "Request Date",
                      Data.proposal[0].request_date
                    )}
                    {this.detailInformation(
                      "Dosen Pembimbing",
                      Data.proposal[0].dosen_pembimbing
                    )}
                    <h6 class="card-title">Status</h6>
                    <div class="badge badge-success">Disetujui</div>
                    <div className="accordion mt-4">
                      <div id="accordion">
                        <div
                          class="accordion-header mb-3"
                          role="button"
                          data-toggle="collapse"
                          data-target="#seminar-proposal"
                          aria-expanded="true"
                        >
                          <h4>Seminar Proposal</h4>
                        </div>
                        <div
                          class="accordion-body collapse show"
                          id="seminar-proposal"
                          data-parent="#accordion"
                        >
                          {this.detailInformation(
                            "Tanggal Pelaksanaan",
                            Data.seminar[0].tanggal_pelaksanaan
                          )}
                          {this.detailInformation(
                            "Tempat Pelaksanaan",
                            Data.seminar[0].tempat_pelaksanaan
                          )}
                          {this.detailInformation(
                            "Dosen Penguji",
                            Data.seminar[0].dosen_penguji
                          )}
                          {this.detailInformation(
                            "Gelombang Seminar",
                            Data.seminar[0].gelombang
                          )}
                          {this.detailInformation(
                            "Tanggal Revisi",
                            Data.seminar[0].tanggal_revisi
                          )}

                          <h6 class="card-title">Status</h6>
                          <div class="badge badge-danger">Belum disetujui</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Skripsi</h4>
                  </div>
                  <div className="card-body">
                    {this.detailInformation("Judul", Data.skripsi[0].judul)}
                    {this.detailInformation(
                      "Deskripsi",
                      Data.skripsi[0].deskripsi
                    )}
                    {this.detailInformation(
                      "Request Date",
                      Data.skripsi[0].request_date
                    )}
                    {this.detailInformation(
                      "Dosen Pembimbing 1",
                      Data.skripsi[0].dosen_pembimbing1
                    )}
                    {this.detailInformation(
                      "Dosen Pembimbing 2",
                      Data.skripsi[0].dosen_pembimbing2
                    )}
                    <h6 class="card-title">Status</h6>
                    <div class="badge badge-success">Disetujui</div>
                    <div className="accordion mt-4">
                      <div id="accordion">
                        <div
                          class="accordion-header mb-3"
                          role="button"
                          data-toggle="collapse"
                          data-target="#revisi-skripsi"
                          aria-expanded="true"
                        >
                          <h4>Revisi Skripsi</h4>
                        </div>
                        <div
                          class="accordion-body collapse"
                          id="revisi-skripsi"
                          data-parent="#accordion"
                        >
                          {this.detailInformation(
                            "Tanggal permintaan",
                            Data.skripsi[0].revisi_skripsi.request_date
                          )}

                          <h6 class="card-title">Status</h6>
                          <div class="badge badge-danger mb-3">
                            Belum disetujui
                          </div>
                        </div>
                      </div>
                      <div id="accordion">
                        <div
                          class="accordion-header mb-3"
                          role="button"
                          data-toggle="collapse"
                          data-target="#kolokium"
                          aria-expanded="true"
                        >
                          <h4>Kolokium</h4>
                        </div>
                        <div
                          class="accordion-body collapse show"
                          id="kolokium"
                          data-parent="#accordion"
                        >
                          {this.detailInformation(
                            "Tanggal Pelaksanaan",
                            Data.kolokium[0].tanggal_pelaksanaan
                          )}
                          {this.detailInformation(
                            "Tempat Pelaksanaan",
                            Data.kolokium[0].tempat_pelaksanaan
                          )}
                          {this.detailInformation("UKT", Data.kolokium[0].ukt)}
                          {this.detailInformation("KRS", Data.kolokium[0].krs)}
                          {this.detailInformation(
                            "Dosen Penguji 1",
                            Data.kolokium[0].dosen_penguji1
                          )}
                          {this.detailInformation(
                            "Dosen Penguji 2",
                            Data.kolokium[0].dosen_penguji2
                          )}
                          {this.detailInformation(
                            "Gelombang Seminar",
                            Data.kolokium[0].gelombang
                          )}
                          {this.detailInformation(
                            "Tanggal Revisi",
                            Data.kolokium[0].tanggal_revisi
                          )}

                          <h6 class="card-title">Status</h6>
                          <div class="badge badge-danger">Belum disetujui</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Data Mahasiswa</h4>
                  </div>
                  <div className="card-body">
                    {this.detailInformation("Nama", Data.mahasiswa[0].nama)}
                    {this.detailInformation("NPM", Data.mahasiswa[0].npm)}
                    {this.detailInformation("No. HP", Data.mahasiswa[0].no_hp)}
                    {this.detailInformation(
                      "Tahun Masuk",
                      Data.mahasiswa[0].tahun_masuk
                    )}
                    {this.detailInformation(
                      "Program Studi",
                      Data.mahasiswa[0].program_studi
                    )}
                    <h6 class="card-title">Status Mahasiswa</h6>
                    <div class="badge badge-success">Selesai</div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h4>Yudisium</h4>
                  </div>
                  <div className="card-body">
                    {this.detailInformation(
                      "Tanggal Pelaksanaan",
                      Data.yudisium[0].tanggal_pelaksanaan
                    )}
                    {this.detailInformation(
                      "Tempat Pelaksanaan",
                      Data.yudisium[0].tempat_pelaksanaan
                    )}
                    {this.detailInformation(
                      "Keterangan",
                      Data.yudisium[0].keterangan
                    )}
                    {this.detailInformation(
                      "Gelombang Yudisium",
                      Data.yudisium[0].gelombang
                    )}

                    <div class="badge badge-success">Disetujui</div>
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

export default DetailMahasiswa;
