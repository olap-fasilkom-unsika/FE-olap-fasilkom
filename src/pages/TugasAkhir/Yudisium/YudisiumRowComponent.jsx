import React from "react";
import { Link } from "react-router-dom";
import StatusPersetujuanComponenet from "../../../components/StatusComponent/StatusPersetujuanComponenet";

const YudisiumRowComponent = (props) => {
  return (
    <tr>
      <td className="text-center">{props.number}</td>
      <td>{props.nim}</td>
      <td>{props.nama}</td>
      <td>{props.judul}</td>
      <td className="text-center">{props.gelombang}</td>
      <td className="text-center"><StatusPersetujuanComponenet status={props.status} /></td>
      <td>
        <Link
          to={{
            pathname: "/mahasiswa/detail",
            props: props.id,
          }}
          className="btn btn-primary"
        >
          Detail
        </Link>
      </td>
    </tr>
  );
};

export default YudisiumRowComponent;
