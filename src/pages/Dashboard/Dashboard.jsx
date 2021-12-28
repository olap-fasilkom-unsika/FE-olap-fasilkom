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

          <CardStatistic />

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
        </section>
      </div>
    );
  }
}

export default Dashboard;
