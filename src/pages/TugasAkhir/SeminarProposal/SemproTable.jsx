import React from "react";
import SemproRowComponent from "./SemproRowComponent";

const SemproTable = ({sempro}) => {
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
          {sempro?.map((smpro, ismpro) => (
            <SemproRowComponent
              key={smpro.id}
              id={smpro.proposal?.mahasiswa?.id}
              number={ismpro + 1}
              nim={smpro.proposal?.mahasiswa?.id}
              nama={smpro.proposal?.mahasiswa?.name}
              judul={smpro.proposal?.judul}
              gelombang={smpro.gelombangSeminar?.id}
              status={smpro.proposal?.statusProposal}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SemproTable;
