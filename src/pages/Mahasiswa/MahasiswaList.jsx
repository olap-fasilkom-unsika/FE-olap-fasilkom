import React, { useEffect, useState } from "react";
import { getListMahasiswa } from "../../api/mahasiswaService";
import MahasiwaComponent from "./MahasiwaComponent";
import ModuleDataTable from "../../js/ModuleDataTable";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";

const MahasiswaList = () => {
  const [Mahasiswa, setMahasiswa] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getListMahasiswa()
      .then((response) => {
        setMahasiswa(response.data.data.mahasiswa);
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
  } else {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4>Tabel Data Mahasiswa</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table" id="table-1">
                  <thead>
                    <tr>
                      <th className="text-center">No</th>
                      <th>NPM</th>
                      <th>Nama</th>
                      <th>No. HP</th>
                      <th>Tahun Masuk</th>
                      <th>Program Studi</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Mahasiswa.map((mhs, imhs) => (
                      <MahasiwaComponent
                        key={mhs.nim}
                        id={mhs.nim}
                        number={imhs + 1}
                        nim={mhs.nim}
                        nama={mhs.nama}
                        noHp={mhs.noHp}
                        tahunMasuk={mhs.tahunMasuk}
                        programStudi={mhs.programStudi.name}
                        status={mhs.statusMahasiswa.id}
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
  }
};

export default MahasiswaList;
