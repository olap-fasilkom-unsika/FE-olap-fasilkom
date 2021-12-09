import React, { useEffect } from "react";
import StatusMahasiswaComponenet from "../StatusComponent/StatusMahasiswaComponenet";
import CardComponent from "./CardComponent";
import DetailInformationComponent from "../DetailInformationComponent";
import { useHistory } from "react-router-dom";

const CardDataMahasiswaComponent = ({ mhs }) => {
  const history = useHistory();
  const ok = () => {
    if (mhs === []) {
      return <div>wkwkw</div>;
    }
  };
  useEffect(() => {}, []);
  console.log(mhs);
  return (
    <CardComponent
      title="Data Mahasiswa"
      body={
        <>
          {ok()}
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent title="Nama" value={mhs.nama} />
              <DetailInformationComponent title="NPM" value={mhs.nim} />
              <DetailInformationComponent title="No. Hp" value={mhs.noHp} />
              <DetailInformationComponent
                title="Email"
                value={mhs.user?.email}
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent
                title="Jenis Kelamin"
                value={mhs.user?.gender}
              />
              <DetailInformationComponent title="Tahun Masuk" value="2018" />
              <DetailInformationComponent
                title="Program Studi"
                value={mhs.programStudi?.name}
              />
              <StatusMahasiswaComponenet status={mhs?.status?.id} />
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardDataMahasiswaComponent;
