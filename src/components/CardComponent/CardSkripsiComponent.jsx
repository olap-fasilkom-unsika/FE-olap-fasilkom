import React from "react";
import CardComponent from "./CardComponent";
import DetailInformationComponent from "../DetailInformationComponent";

const CardSkripsiComponent = () => {
  return (
    <CardComponent
      title="Skripsi"
      body={
        <>
          <DetailInformationComponent title="judul" value="123" />
          <DetailInformationComponent title="Deskripsi" value="123" />
          <DetailInformationComponent title="Request Date" value="123" />
          <DetailInformationComponent title="Dosen Pembimbing 1" value="123" />
          <DetailInformationComponent title="Dosen Pembimbing 2" value="123" />
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
                <DetailInformationComponent
                  title="Tanggal Permintaan"
                  value="123"
                />

                <h6 class="card-title">Status</h6>
                <div class="badge badge-danger mb-3">Belum disetujui</div>
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
                <DetailInformationComponent
                  title="Tanggal Pelaksanaan"
                  value="123"
                />
                <DetailInformationComponent
                  title="Tempat Permintaan"
                  value="123"
                />
                <DetailInformationComponent
                  title="UKT"
                  value="123"
                />
                <DetailInformationComponent
                  title="KRS"
                  value="123"
                />
                <DetailInformationComponent
                  title="Dosen Penguji 1"
                  value="123"
                />
                <DetailInformationComponent
                  title="Dosen Penguji 2"
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

export default CardSkripsiComponent;
