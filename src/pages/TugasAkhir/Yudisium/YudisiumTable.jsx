import React from "react";
import YudisiumRowComponent from "./YudisiumRowComponent";

const YudisiumTable = ({ yudisium }) => {
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
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {yudisium?.map((ydsm, iydsm) => (
            <YudisiumRowComponent
              key={ydsm.id}
              id={ydsm.kolokium?.skripsi?.mahasiswa?.id}
              number={iydsm + 1}
              nim={ydsm.kolokium?.skripsi?.mahasiswa?.id}
              nama={ydsm.kolokium?.skripsi?.mahasiswa?.name}
              judul={ydsm.kolokium?.skripsi?.judul}
              gelombang={ydsm.gelombangYudisium?.id}
              status={ydsm.statusYudisium}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YudisiumTable;
