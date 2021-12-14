import React from "react";
import { Link } from "react-router-dom";

const KolokiumRowComponent = (props) => {
  return (
    <tr>
      <td className="text-center">{props.number}</td>
      <td>{props.nim}</td>
      <td>{props.nama}</td>
      <td>{props.judul}</td>
      <td className="text-center">{props.gelombang}</td>
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

export default KolokiumRowComponent;
