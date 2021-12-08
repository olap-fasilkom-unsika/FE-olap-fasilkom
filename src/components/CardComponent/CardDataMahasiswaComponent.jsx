import React from "react";
import StatusMahasiswaComponenet from "../StatusComponent/StatusMahasiswaComponenet";
import CardComponent from "./CardComponent";
import DetailInformationComponent from "../DetailInformationComponent";

const CardDataMahasiswaComponent = () => {
  return (
    <CardComponent
      title="Data Mahasiswa"
      body={
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent title="Nama" value="Adam Mukti" />
              <DetailInformationComponent title="NPM" value="1810631170103" />
              <DetailInformationComponent title="No. Hp" value="08997584110" />
              <DetailInformationComponent
                title="Email"
                value="adam.mukti18103@student.unsika.ac.id"
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <DetailInformationComponent
                title="Jenis Kelamin"
                value="Laki-laki"
              />
              <DetailInformationComponent title="Tahun Masuk" value="2018" />
              <DetailInformationComponent
                title="Program Studi"
                value="Teknik Informatika"
              />
              <StatusMahasiswaComponenet status="A" />
            </div>
          </div>
        </>
      }
    />
  );
};

export default CardDataMahasiswaComponent;
