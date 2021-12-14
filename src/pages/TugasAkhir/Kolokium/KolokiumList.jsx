import React, { useEffect, useState } from "react";
import { getKolokiumByGelombang, getListGelombangKolokium, getListKolokium } from "../../../api/kolokiumService";
import LoadingComponent from "../../../components/LoadingComponent";
import ModuleDataTable from "../../../js/ModuleDataTable";
import KolokiumTable from "./KolokiumTable";

const KolokiumList = () => {
  const [kolokium, setKolokium] = useState([]);
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
      getListKolokium()
        .then((response) => {
          setKolokium(response.data.data.kolokium);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          ModuleDataTable();
        });
    } else {
      setKolokium([]);
      getKolokiumByGelombang(gelombang)
        .then((response) => {
          setKolokium(response.data.data.kolokium);
          console.log(response.data.data.kolokium);
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
    getListGelombangKolokium()
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
            <KolokiumTable kolokium={kolokium} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolokiumList;
