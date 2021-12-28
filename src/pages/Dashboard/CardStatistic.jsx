import React, { useEffect, useState } from "react";
import { getTotalData } from "../../api/dashboardService";
import CardStatisticComponent from "../../components/CardComponent/CardStatisticComponent";
import LoadingComponent from "../../components/LoadingComponent";

function CardStatistic() {
  const [totalData, setTotalData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setLoading(true);
    getTotalData()
      .then((response) => {
        setTotalData(response.data.data);
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
    <>
      <div className="row">
        <CardStatisticComponent
          colSize="col-lg-6 col-md-6"
          title="Mahasiswa"
          value={totalData.totalMahasiswa}
          bg="card-icon bg-primary"
          icon="far fa-user"
          url="/mahasiswa"
        />
        <CardStatisticComponent
          colSize="col-lg-6 col-md-6"
          title="Dosen"
          value={totalData.totalDosen}
          bg="card-icon bg-info"
          icon="fas fa-user-tie"
          url="/dosen"
        />
      </div>
      <div className="row">
        <CardStatisticComponent
          colSize="col-lg-4 col-md-4"
          title="Proposal"
          value={totalData.totalProposal}
          bg="card-icon bg-danger"
          icon="far fa-newspaper"
          url="/seminar-proposal"
        />
        <CardStatisticComponent
          colSize="col-lg-4 col-md-4"
          title="Kolokium"
          value={totalData.totalKolokium}
          bg="card-icon bg-warning"
          icon="far fa-newspaper"
          url="/kolokium"
        />
        <CardStatisticComponent
          colSize="col-lg-4 col-md-4"
          title="Yudisium"
          value={totalData.totalYudisium}
          bg="card-icon bg-success"
          icon="far fa-newspaper"
          url="/yudisium"
        />
      </div>
    </>
  );
}

export default CardStatistic;
