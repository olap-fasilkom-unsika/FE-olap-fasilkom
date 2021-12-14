import React from "react";
import KolokiumRowComponent from "./KolokiumRowComponent";

const KolokiumTable = ({kolokium}) => {
  return (
    <div className="table-responsive">
      <table className="table" id="table-1">
        <thead>
          <tr>
            <th className="text-center">No</th>
            <th className="text-center">NPM</th>
            <th className="text-center">Nama</th>
            <th className="text-center">Judul</th>
            <th className="text-center">Gelombang</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {kolokium?.map((klkm, iklkm) => (
            <KolokiumRowComponent
              key={klkm.id}
              id={klkm.skripsi?.mahasiswa?.id}
              number={iklkm + 1}
              nim={klkm.skripsi?.mahasiswa?.id}
              nama={klkm.skripsi?.mahasiswa?.name}
              judul={klkm.skripsi?.judul}
              gelombang={klkm.gelombangKolokium?.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KolokiumTable;
