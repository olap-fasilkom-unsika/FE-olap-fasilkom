import React, { useEffect, useState } from "react";
import MahasiwaComponent from "./DosenRowComponent";
import ModuleDataTable from "../../js/ModuleDataTable";
import { getListDosen } from "../../api/dosenService";

const DosenList = () => {
  const [dosen, setDosen] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDataDosen();
  }, []);

  const loadDataDosen = () => {
    setLoading(true);
    getListDosen()
      .then((response) => {
        setDosen(response.data.data.dosen);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        ModuleDataTable();
      });
  };

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4>Tabel Data Dosen</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table" id="table-1">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th>NIDN</th>
                    <th>Nama</th>
                    <th>No. Hp</th>
                    <th>Email</th>
                    <th>Jenis Kelamin</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dosen?.map((dsn, idsn) => (
                    <MahasiwaComponent
                      key={dsn.nidn}
                      id={dsn.nidn}
                      number={idsn + 1}
                      nidn={dsn.nidn}
                      nama={dsn.nama}
                      noHp={dsn.noHp}
                      email={dsn.user.email}
                      jenisKelamin={dsn.user.gender}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DosenList;
