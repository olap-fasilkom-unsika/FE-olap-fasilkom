import React, { useEffect, useState } from "react";
import { getMahasiswaByIdDosen } from "../../api/dosenService";
import MahasiswaTable from "../Mahasiswa/MahasiswaTable";
import ModuleDataTable from "../../js/ModuleDataTable";

const MahasiswaBimbinganComponent = ({ id }) => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDataMahasiswa();
  }, []);

  const loadDataMahasiswa = () => {
    setLoading(true);
    getMahasiswaByIdDosen(id)
      .then((response) => {
        setMahasiswa(response.data.data.mahasiswa);
        console.log(response.data.data.mahasiswa);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        ModuleDataTable();
      });
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4>Tabel Mahasiswa Bimbingan</h4>
          </div>
          <div className="card-body">
            <MahasiswaTable mahasiswa={mahasiswa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahasiswaBimbinganComponent;
