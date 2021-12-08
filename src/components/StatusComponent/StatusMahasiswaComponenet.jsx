import React, { useEffect } from "react";
import $ from "jquery";
const StatusMahasiswaComponenet = ({ status }) => {
  useEffect(() => {
    $('[data-toggle="popover"]').popover({
      container: "body",
    });
  }, []);

  const statusMahasiswa = () => {
    if (status === "A") {
      return (
        <div
          className="badge badge-success"
          data-toggle="popover"
          data-trigger="hover"
          data-content="Sudah Disetujui"
        >
          A
        </div>
      );
    }
  };

  return (
    <>
      <h6 class="card-title">Status Mahasiswa</h6>
      {statusMahasiswa()}
    </>
  );
};

export default StatusMahasiswaComponenet;
