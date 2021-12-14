import React, { useEffect, useState } from "react";
import { getListGelombangYudisium, getListYudisium, getYudisiumByGelombang } from "../../../api/yudisiumService";
import DateFormatComponent from "../../../components/DateFormatComponent";
import DetailInformationComponent from "../../../components/DetailInformationComponent";
import LoadingComponent from "../../../components/LoadingComponent";
import ModuleDataTable from "../../../js/ModuleDataTable";
import YudisiumTable from "./YudisiumTable";

const YudisiumList = () => {
  const [yudisium, setYudisium] = useState([]);
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
      getListYudisium()
        .then((response) => {
          setYudisium(response.data.data.yudisium);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          ModuleDataTable();
        });
    } else {
      setYudisium([]);
      getYudisiumByGelombang(gelombang)
        .then((response) => {
          setYudisium(response.data.data.yudisium);
          console.log(response.data.data.yudisium[0].tanggalPelaksanaan);
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
    getListGelombangYudisium()
      .then((response) => {
        setListGelombang(response.data.data);
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

  const gelombangSelected = () => {
    if (gelombang !== "Semua") {
      return (
        <div className="row mb-3">
          <div className="col-lg-6">
            <DetailInformationComponent
              title={"Tanggal Pelaksanaan"}
              value={
                <DateFormatComponent date={yudisium[0]?.tanggalPelaksanaan} />
              }
            />
          </div>
          <div className="col-lg-6">
            <DetailInformationComponent
              title={"Tempat Pelaksanaan"}
              value={yudisium[0]?.tempatPelaksanaan}
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
            <h4>Kolokium</h4>
            <div className="dropdown ">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Gelombang Kolokium
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
            <YudisiumTable yudisium={yudisium} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YudisiumList;
