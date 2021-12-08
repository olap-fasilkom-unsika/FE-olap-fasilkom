import React, { useEffect, useState } from "react";
import "../../App.css";
import CardDataMahasiswaComponent from "../../components/CardComponent/CardDataMahasiswaComponent";
import CardYudisiumComponent from "../../components/CardComponent/CardYudisiumComponent";
import CardProposalComponent from "../../components/CardComponent/CardProposalComponent";
import CardSkripsiComponent from "../../components/CardComponent/CardSkripsiComponent";
import { getListMahasiswa, getMahasiswaById } from "../../api/mahasiswaService";

const DetailMahasiswa = (props) => {
  const id = props.location.props;
  const [Mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getMahasiswaById(id)
      .then((response) => {
        setMahasiswa(response.data.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>Mahasiswa</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Manage</a>
            </div>
            <div className="breadcrumb-item">
              <a href="#">Mahasiswa</a>
            </div>
            <div className="breadcrumb-item">Detail Mahasiswa</div>
          </div>
        </div>

        <div className="section-body">
          <h2 className="section-title">Detail Mahasiswa</h2>
          <CardDataMahasiswaComponent mhs={Mahasiswa}/>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <CardProposalComponent />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <CardSkripsiComponent />
              <CardYudisiumComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailMahasiswa;
