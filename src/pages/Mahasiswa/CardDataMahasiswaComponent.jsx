import React, { useEffect, useState } from "react";
import StatusMahasiswaComponenet from "../../components/StatusComponent/StatusMahasiswaComponenet";
import CardComponent from "../../components/CardComponent/CardComponent";
import DetailInformationComponent from "../../components/DetailInformationComponent";
import { getMahasiswaById } from "../../api/mahasiswaService";
import LoadingComponent from "../../components/LoadingComponent";

const CardDataMahasiswaComponent = ({ id }) => {
  
  const [mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getMahasiswaById(id)
      .then((response) => {
        setMahasiswa(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <CardComponent
      title="Data Mahasiswa"
      body={
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent title="Nama" value={mahasiswa.nama} />
              <DetailInformationComponent title="NPM" value={mahasiswa.nim} />
              <DetailInformationComponent
                title="No. Hp"
                value={mahasiswa.noHp}
              />
              <DetailInformationComponent
                title="Email"
                value={mahasiswa.user?.email}
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent
                title="Jenis Kelamin"
                value={mahasiswa.user?.gender}
              />
              <DetailInformationComponent
                title="Tahun Masuk"
                value={mahasiswa.tahunMasuk}
              />
              <DetailInformationComponent
                title="Program Studi"
                value={mahasiswa.programStudi?.name}
              />
              {/* <h6 class="card-title">Status Mahasiswa</h6> */}
              <p className="card-text mb-0">Status Mahasiswa</p>
              <StatusMahasiswaComponenet status={mahasiswa?.statusMahasiswa} />
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardDataMahasiswaComponent;
