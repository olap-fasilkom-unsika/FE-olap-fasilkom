import React, { useEffect, useState } from "react";
import {
  getListGelombangSeminar,
  getListSeminar,
  getSeminarByGelombang,
} from "../../../api/semproService";
import DateFormatComponent from "../../../components/DateFormatComponent";
import DetailInformationComponent from "../../../components/DetailInformationComponent";
import LoadingComponent from "../../../components/LoadingComponent";
import ModuleDataTable from "../../../js/ModuleDataTable";
import SemproTable from "./SemproTable";

const SemproList = () => {
  const [sempro, setSempro] = useState([]);
  const [gelombang, setGelombang] = useState("Semua");
  const [listGelombang, setListGelombang] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDataGelombang();
    loadDataMahasiswa();
  }, [gelombang]);

  const loadDataMahasiswa = () => {
    setLoading(true);
    if (gelombang === "Semua") {
      getListSeminar()
        .then((response) => {
          setSempro(response.data.data.seminar);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          ModuleDataTable();
        });
    } else {
      setSempro([]);
      getSeminarByGelombang(gelombang)
        .then((response) => {
          setSempro(response.data.data.seminar);
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

  const loadDataGelombang = () => {
    getListGelombangSeminar()
      .then((response) => {
        setListGelombang(response.data.data);
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

  const gelombangSelected = () => {
    if (gelombang !== "Semua") {
      return (
        <div className="row mb-3">
          <div className="col-lg-6">
            <DetailInformationComponent
              title={"Tanggal Pelaksanaan"}
              value={
                <DateFormatComponent date={sempro[0]?.tanggalPelaksanaan} />
              }
            />
          </div>
          <div className="col-lg-6">
            <DetailInformationComponent
              title={"Tempat Pelaksanaan"}
              value={sempro[0]?.tempatPelaksanaan}
            />
          </div>
        </div>
      );
    }
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4>Seminar Proposal</h4>
            <div className="dropdown ">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Gelombang Seminar
              </button>
              <div className="dropdown-menu">
                <button
                  className={
                    gelombang === "Semua"
                      ? "dropdown-item active"
                      : "dropdown-item"
                  }
                  onClick={() => setGelombang("Semua")}
                >
                  Semua
                </button>
                {listGelombang?.map((sts) => (
                  <button
                    key={sts.id}
                    className={
                      gelombang === sts.id
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    onClick={() => setGelombang(sts.id)}
                  >
                    {sts.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="card-body">
            {gelombangSelected()}
            <SemproTable sempro={sempro} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemproList;
