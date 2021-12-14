import React, { useEffect, useState } from "react";
import {
  getKolokiumByIdMahasiswa,
  getSkripsiByIdMahasiswa,
} from "../../api/kolokiumService";
import LoadingComponent from "../../components/LoadingComponent";
import DetailInformationComponent from "../../components/DetailInformationComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

const CardSkripsiComponent = ({ id }) => {
  const [skripsi, setSkripsi] = useState([]);
  const [kolokium, setKolokium] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getSkripsiByIdMahasiswa(id)
      .then((response) => {
        setSkripsi(response.data.data);
      })
      .catch((err) => {
        setSkripsi(err.response);
        // console.clear()
      })
      .finally(() => {
        setLoading(false);
      });
    getKolokiumByIdMahasiswa(id)
      .then((response) => {
        setKolokium(response.data.data);
      })
      .catch((err) => {
        setKolokium(err.response);
        // console.clear()
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingComponent />;
  }

  if (skripsi?.status === 404) {
    return (
      <CardComponent
        title="Skripsi"
        body={<h6 className="card-title text-center">{skripsi.data.message}</h6>}
      />
    );
  }

  let resultSeminar;
  if (kolokium?.status === 404) {
    resultSeminar = () => (
      <h6 className="card-title text-center">{kolokium.data.message}</h6>
    );
  } else {
    resultSeminar = () => (
      <div
        className="accordion-body collapse show"
        id="kolokium-skripsi"
        data-parent="#accordion"
      >
        <DetailInformationComponent
          title="Tanggal Pelaksanaan"
          value={kolokium.tanggalPelaksanaan}
        />

        <DetailInformationComponent
          title="Tempat Pelaksanaan"
          value={kolokium.tempatPelaksanaan}
        />
        <DetailInformationComponent title="UKT" value={kolokium.ukt} />
        <DetailInformationComponent title="KRS" value={kolokium.krs} />
        <DetailInformationComponent
          title="Dosen Penguji 1"
          value={kolokium.dosenPenguji1?.name}
        />
        <DetailInformationComponent
          title="Dosen Penguji 2"
          value={kolokium.dosenPenguji2?.name}
        />
        <DetailInformationComponent
          title="Gelombang Kolokium"
          value={kolokium.gelombangKolokium?.name}
        />
      </div>
    );
  }
  return (
    <CardComponent
      title="Skripsi"
      body={
        <>
          <DetailInformationComponent title="Judul" value={skripsi.judul} />
          <DetailInformationComponent
            title="Deskripsi"
            value={skripsi.deskripsi}
          />
          <DetailInformationComponent
            title="Request Date"
            value={skripsi.requestDate}
          />
          <DetailInformationComponent
            title="Dosen Pembimbing 1"
            value={skripsi.dosenPembimbing1?.name}
          />
          <DetailInformationComponent
            title="Dosen Pembimbing 2"
            value={skripsi.dosenPembimbing2?.name}
          />
          <div className="accordion mt-4">
            <div id="accordion">
              <div
                className="accordion-header mb-3"
                role="button"
                data-toggle="collapse"
                data-target="#kolokium-skripsi"
                aria-expanded="true"
              >
                <h4>Kolokium</h4>
              </div>
              {resultSeminar()}
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardSkripsiComponent;
