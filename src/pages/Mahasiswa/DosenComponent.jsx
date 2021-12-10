import React from "react";
import { Link } from "react-router-dom";

const DosenComponent = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.nidn}</td>
      <td>{props.nama}</td>
      <td>{props.noHp}</td>
      <td>{props.email}</td>
      <td>{props.jenisKelamin}</td>
      <td>
        <Link
          to={{
            pathname: '/dosen/detail',
            props: props.id
          }}
          className="btn btn-primary"
        >
          Detail
        </Link>
      </td>
    </tr>
  );
};

export default DosenComponent;
