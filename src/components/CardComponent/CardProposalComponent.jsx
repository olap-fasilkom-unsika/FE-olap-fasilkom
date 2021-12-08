import React from "react";
import CardComponent from "./CardComponent";
import DetailInformationComponent from "../DetailInformationComponent";

const CardProposalComponent = () => {
  return (
    <CardComponent
      title="Proposal"
      body={
        <>
          <DetailInformationComponent title="Judul" value="123" />
          <DetailInformationComponent title="Deskripsi" value="123" />
          <DetailInformationComponent title="Request Date" value="123" />
          <DetailInformationComponent title="Dosen Pembimbing" value="123" />
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
                <DetailInformationComponent
                  title="Tanggal Pelaksanaan"
                  value="123"
                />
                
                <DetailInformationComponent
                  title="Tempat Pelaksanaan"
                  value="123"
                />
                <DetailInformationComponent
                  title="Dosen Penguji"
                  value="123"
                />
                <DetailInformationComponent
                  title="Gelombang Seminar"
                  value="123"
                />
                <DetailInformationComponent
                  title="Tanggal Revisi"
                  value="123"
                />
                <h6 class="card-title">Status</h6>
                <div class="badge badge-danger">Belum disetujui</div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardProposalComponent;
