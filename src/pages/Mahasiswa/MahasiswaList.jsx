import React, { useEffect, useState } from "react";
import {
  getListMahasiswa,
  getListStatusMahasiswa,
  getMahasiswaByStatus,
} from "../../api/mahasiswaService";
import LoadingComponent from "../../components/LoadingComponent";
import ModuleDataTable from "../../js/ModuleDataTable";
import MahasiswaTable from "./MahasiswaTable";

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
    return <LoadingComponent />;
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
            <MahasiswaTable mahasiswa={mahasiswa} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahasiswaList;
