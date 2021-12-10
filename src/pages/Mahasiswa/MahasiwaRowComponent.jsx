import React from "react";
import { Link } from "react-router-dom";
import StatusMahasiswaComponenet from "../../components/StatusComponent/StatusMahasiswaComponenet";

const MahasiwaRowComponent = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.nim}</td>
      <td>{props.nama}</td>
      <td>{props.email}</td>
      <td>{props.noHp}</td>
      <td>{props.gender}</td>
      <td>{props.tahunMasuk}</td>
      <td>{props.programStudi}</td>
      <td><StatusMahasiswaComponenet status={props.status}/></td>
      <td>
        <Link
          to={{
            pathname: '/mahasiswa/detail',
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

export default MahasiwaRowComponent;
