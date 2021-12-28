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
    <div className="row">
      <CardStatisticComponent
        title="Mahasiswa"
        value={totalData.totalMahasiswa}
        bg="card-icon bg-primary"
        icon="far fa-user"
        url='/mahasiswa'
      />
      <CardStatisticComponent
        title="Mahasiswa"
        value={totalData.totalMahasiswa}
        bg="card-icon bg-primary"
        icon="far fa-user"
        url='/mahasiswa'
      />
      <CardStatisticComponent
        title="Proposal"
        value={totalData.totalProposal}
        bg="card-icon bg-danger"
        icon="far fa-newspaper"
        url='/seminar-proposal'
      />
      <CardStatisticComponent
        title="Kolokium"
        value={totalData.totalKolokium}
        bg="card-icon bg-warning"
        icon="far fa-newspaper"
        url='/kolokium'
      />
      <CardStatisticComponent
        title="Yudisium"
        value={totalData.totalYudisium}
        bg="card-icon bg-success"
        icon="far fa-newspaper"
        url='/yudisium'
      />
    </div>
  );
}

export default CardStatistic;
