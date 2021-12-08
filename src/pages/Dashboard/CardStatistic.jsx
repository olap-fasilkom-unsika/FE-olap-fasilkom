import React from "react";
import CardStatisticComponent from "../../components/CardComponent/CardStatisticComponent";

function CardStatistic() {
  return (
    <>
      <CardStatisticComponent
        title="Mahasiswa"
        value="4238"
        bg="card-icon bg-primary"
        icon="far fa-user"
      />
      <CardStatisticComponent
        title="Proposal"
        value="42"
        bg="card-icon bg-danger"
        icon="far fa-newspaper"
      />
      <CardStatisticComponent
        title="Kolokium"
        value="42"
        bg="card-icon bg-warning"
        icon="far fa-newspaper"
      />
      <CardStatisticComponent
        title="Yudisium"
        value="42"
        bg="card-icon bg-success"
        icon="far fa-newspaper"
      />
    </>
  );
}

export default CardStatistic;
