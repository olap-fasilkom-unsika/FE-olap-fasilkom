import React from "react";
import CardComponent from "./CardComponent";
import DetailInformationComponent from "../DetailInformationComponent";

const CardYudisiumComponent = () => {
  return (
    <CardComponent
      title="Yudisium"
      body={
        <>
          <DetailInformationComponent title="Tanggal Pelaksanaan" value="123" />
          <DetailInformationComponent title="Tempat Pelaksanaan" value="123" />
          <DetailInformationComponent title="Keterangan" value="123" />
          <DetailInformationComponent title="Gelombanga Yudisium" value="123" />
          <div class="badge badge-success">Disetujui</div>
        </>
      }
    />
  );
};

export default CardYudisiumComponent;
