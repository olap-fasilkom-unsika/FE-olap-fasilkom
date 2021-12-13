import React, { useEffect, useState } from "react";

import { getYudisiumByIdMahasiswa } from "../../api/yudisiumService";
import CardComponent from "../../components/CardComponent/CardComponent";

import DetailInformationComponent from "../../components/DetailInformationComponent";
import LoadingComponent from "../../components/LoadingComponent";
import StatusPersetujuanComponenet from "../../components/StatusComponent/StatusPersetujuanComponenet";

const CardYudisiumComponent = ({ id }) => {
  const [yudisium, setYudisium] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getYudisiumByIdMahasiswa(id)
      .then((response) => {
        setYudisium(response.data.data);
      })
      .catch((err) => {
        setYudisium(err.response);
        // console.clear()
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingComponent />;
  }

  if (yudisium?.status === 404) {
    return (
      <CardComponent
        title="Yudisium"
        body={<h6 class="card-title text-center">{yudisium.data.message}</h6>}
      />
    );
  }

  return (
    <CardComponent
      title="Yudisium"
      body={
        <>
          <div className="row">
            <div className="col-lg-6">
              <DetailInformationComponent
                title="Tanggal Pelaksanaan"
                value={yudisium.tanggalPelaksanaan}
              />
              <DetailInformationComponent
                title="Tempat Pelaksanaan"
                value={yudisium.tempatPelaksanaan}
              />
              <DetailInformationComponent
                title="Keterangan"
                value={yudisium.keterangan}
              />
            </div>
            <div className="col-lg-6">
              <DetailInformationComponent
                title="Status Yudisium"
                value={yudisium.gelombangYudisium?.name}
              />
              <h6 class="card-title">Status Yudisium</h6>
              <StatusPersetujuanComponenet status={yudisium.statusYudisium} />
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardYudisiumComponent;
