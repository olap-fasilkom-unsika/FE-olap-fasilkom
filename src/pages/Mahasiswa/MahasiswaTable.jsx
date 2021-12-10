import React from "react";
import MahasiwaRowComponent from "./MahasiwaRowComponent";

const MahasiswaTable = ({mahasiswa}) => {
  return (
    <div className="table-responsive">
      <table className="table" id="table-1">
        <thead>
          <tr>
            <th className="text-center">No</th>
            <th>NPM</th>
            <th>Nama</th>
            <th>Email</th>
            <th>No. HP</th>
            <th>Jenis Kelamin</th>
            <th>Tahun Masuk</th>
            <th>Program Studi</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa?.map((mhs, imhs) => (
            <MahasiwaRowComponent
              key={mhs.nim}
              id={mhs.nim}
              number={imhs + 1}
              nim={mhs.nim}
              nama={mhs.nama}
              gender={mhs.user.gender}
              noHp={mhs.noHp}
              email={mhs.user.email}
              tahunMasuk={mhs.tahunMasuk}
              programStudi={mhs.programStudi.name}
              status={mhs.statusMahasiswa}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MahasiswaTable;
