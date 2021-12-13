import React, { useEffect, useState } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import DetailInformationComponent from "../../components/DetailInformationComponent";

import LoadingComponent from "../../components/LoadingComponent";
import StatusPersetujuanComponenet from "../../components/StatusComponent/StatusPersetujuanComponenet";
import { getProposalByIdMahasiswa, getSeminarByIdMahasiswa } from "../../api/semproService";


const CardProposalComponent = ({ id }) => {
  const [proposal, setProposal] = useState([]);
  const [seminar, setSeminar] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getProposalByIdMahasiswa(id)
      .then((response) => {
        setProposal(response.data.data);
      })
      .catch((err) => {
        setProposal(err.response);
        // console.clear()
      })
      .finally(() => {
        setLoading(false);
      });
    getSeminarByIdMahasiswa(id)
      .then((response) => {
        setSeminar(response.data.data);
      })
      .catch((err) => {
        setSeminar(err.response);
        // console.clear()
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingComponent />;
  }

  if (proposal?.status === 404) {
    return (
      <CardComponent
        title="Proposal"
        body={<h6 class="card-title text-center">{proposal.data.message}</h6>}
      />
    );
  }

  let resultSeminar;
  if (seminar?.status === 404) {
    resultSeminar = () => (
      <h6 class="card-title text-center">{seminar.data.message}</h6>
    );
  } else {
    resultSeminar = () => (
      <div
        class="accordion-body collapse show"
        id="seminar-proposal"
        data-parent="#accordion"
      >
        <DetailInformationComponent
          title="Tanggal Pelaksanaan"
          value={seminar.tanggalPelaksanaan}
        />

        <DetailInformationComponent
          title="Tempat Pelaksanaan"
          value={seminar.tempatPelaksanaan}
        />
        <DetailInformationComponent
          title="Dosen Penguji"
          value={seminar.dosenPenguji?.name}
        />
        <DetailInformationComponent
          title="Gelombang Seminar"
          value={seminar.gelombangSeminar?.name}
        />
      </div>
    );
  }
  return (
    <CardComponent
      title="Proposal"
      body={
        <>
          <DetailInformationComponent title="Judul" value={proposal.judul} />
          <DetailInformationComponent
            title="Deskripsi"
            value={proposal.deskripsi}
          />
          <DetailInformationComponent
            title="Request Date"
            value={proposal.requestDate}
          />
          <DetailInformationComponent
            title="Dosen Pembimbing"
            value={proposal.dosenPembimbing?.name}
          />
          <h6 class="card-title">Status</h6>
          <StatusPersetujuanComponenet status={proposal.statusProposal} />
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
              {resultSeminar()}
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardProposalComponent;
