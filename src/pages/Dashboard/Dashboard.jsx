import React, { Component } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import CardStatistic from "./CardStatistic";
import { ChartGeneral } from "./GraphGeneralDashboard/ChartGeneral";

export class Dashboard extends Component {
  componentDidMount() {
    ChartGeneral();
  }
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Dashboard</h1>
          </div>
          <div className="row">
            <CardStatistic />
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 col-sm-12">
              <CardComponent
                title="Data Kelulusan"
                body={
                  <>
                    <canvas id="myChart" height="182"></canvas>
                  </>
                }
              />
            </div>
            <div className="col-lg-4 col-md-12 col-12 col-sm-12">
              <CardComponent
                title="Events"
                body={
                  <>
                    <ul className="list-unstyled list-unstyled-border">
                      <li className="media">
                        <div className="media-body">
                          <div className="float-right">07/11/2021</div>
                          <div className="media-title">
                            Jadwal Seminar Proposal
                          </div>
                          <span className="text-small text-muted">
                            Gelombang 2
                          </span>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-body">
                          <div className="float-right">16/11/2021</div>
                          <div className="media-title">
                            Jadwal Seminar Hasil
                          </div>
                          <span className="text-small text-muted">
                            Gelombang 2
                          </span>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-body">
                          <div className="float-right">23/11/2021</div>
                          <div className="media-title">
                            Jadwal Sidang Skripsi
                          </div>
                          <span className="text-small text-muted">
                            Gelombang 2
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center pt-1 pb-1">
                      <a href="#" className="btn btn-primary btn-lg btn-round">
                        View All
                      </a>
                    </div>
                  </>
                }
              />
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-6 col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Topik terfavorit</h4>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      2,100
                    </div>
                    <div className="font-weight-bold mb-1">Sistem Pakar</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      1,880
                    </div>
                    <div className="font-weight-bold mb-1">Data Mining</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="67%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      1,521
                    </div>
                    <div className="font-weight-bold mb-1">
                      Sistem Informasi
                    </div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="58%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      884
                    </div>
                    <div className="font-weight-bold mb-1">
                      Machine Learning
                    </div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="36%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      473
                    </div>
                    <div className="font-weight-bold mb-1">Web Development</div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="28%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-small float-right font-weight-bold text-muted">
                      418
                    </div>
                    <div className="font-weight-bold mb-1">
                      Android Development
                    </div>
                    <div className="progress" data-height="3">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-width="20%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6 col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="d-inline">Tasks</h4>
                  <div className="card-header-action">
                    <a href="#" className="btn btn-primary">
                      View All
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-1"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-4.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-danger mb-1 float-right">
                          Not Finished
                        </div>
                        <h6 className="media-title">
                          <a href="#">Redesign header</a>
                        </h6>
                        <div className="text-small text-muted">
                          Alfa Zulkarnain <div className="bullet"></div>{" "}
                          <span className="text-primary">Now</span>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-2"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-2"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-5.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-primary mb-1 float-right">
                          Completed
                        </div>
                        <h6 className="media-title">
                          <a href="#">Add a new component</a>
                        </h6>
                        <div className="text-small text-muted">
                          Serj Tankian <div className="bullet"></div> 4 Min
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-3"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-3"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-2.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-warning mb-1 float-right">
                          Progress
                        </div>
                        <h6 className="media-title">
                          <a href="#">Fix modal window</a>
                        </h6>
                        <div className="text-small text-muted">
                          Ujang Maman <div className="bullet"></div> 8 Min
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="cbx-4"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="cbx-4"
                        ></label>
                      </div>
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-1.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="badge badge-pill badge-danger mb-1 float-right">
                          Not Finished
                        </div>
                        <h6 className="media-title">
                          <a href="#">Remove unwanted classNamees</a>
                        </h6>
                        <div className="text-small text-muted">
                          Farhan A Mujib <div className="bullet"></div> 21 Min
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
