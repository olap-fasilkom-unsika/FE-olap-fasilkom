import React, { useEffect, useState } from "react";
import StatusMahasiswaComponenet from "../StatusComponent/StatusMahasiswaComponenet";
import CardComponent from "./CardComponent";
import DetailInformationComponent from "../DetailInformationComponent";
import { getMahasiswaById } from "../../api/mahasiswaService";
import { getDosenById } from "../../api/dosenService";

const CardDataDosenComponent = ({ id }) => {
  const [dosen, setDosen] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getDosenById(id)
      .then((response) => {
        setDosen(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <div></div>;
  }
  return (
    <CardComponent
      title="Data Dosen"
      body={
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent title="Nama" value={dosen.nama} />
              <DetailInformationComponent title="NIDN" value={dosen.nidn} />
              <DetailInformationComponent title="No. Hp" value={dosen.noHp} />
            </div>
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent
                title="Email"
                value={dosen.user?.email}
              />
              <DetailInformationComponent
                title="Jenis Kelamin"
                value={dosen.user?.gender}
              />
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardDataDosenComponent;
