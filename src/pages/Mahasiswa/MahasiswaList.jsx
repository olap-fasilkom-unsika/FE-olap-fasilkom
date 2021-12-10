import React, { useEffect, useState } from "react";
import {
  getListMahasiswa,
  getListStatusMahasiswa,
  getMahasiswaByStatus,
} from "../../api/mahasiswaService";
import MahasiwaComponent from "./MahasiwaComponent";
import ModuleDataTable from "../../js/ModuleDataTable";

const MahasiswaList = () => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [status, setStatus] = useState("Semua");
  const [listStatus, setListStatus] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDataStatus();
    loadDataMahasiswa();
  }, [status]);

  const loadDataMahasiswa = () => {
    setLoading(true);
    if (status === "Semua") {
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
    } else {
      getMahasiswaByStatus(status)
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
    }
  };

  const loadDataStatus = () => {
    getListStatusMahasiswa()
      .then((response) => {
        setListStatus(response.data.data);
        // console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
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
            <h4>Tabel Data Mahasiswa</h4>
            <div className="dropdown ">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Status Mahasiswa
              </button>
              <div className="dropdown-menu">
                <button
                  className={
                    status === "Semua"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => setStatus("Semua")}
                >
                  Semua
                </button>
                {listStatus?.map((sts) => (
                  <button
                    key={sts.id}
                    className={
                      status === sts.id
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={() => setStatus(sts.id)}
                  >
                    {sts.id}
                  </button>
                ))}
              </div>
            </div>
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
                  {mahasiswa?.map((mhs, imhs) => (
                    <MahasiwaComponent
                      key={mhs.nim}
                      id={mhs.nim}
                      number={imhs + 1}
                      nim={mhs.nim}
                      nama={mhs.nama}
                      noHp={mhs.noHp}
                      tahunMasuk={mhs.tahunMasuk}
                      programStudi={mhs.programStudi.name}
                      status={mhs.statusMahasiswa}
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

export default MahasiswaList;
