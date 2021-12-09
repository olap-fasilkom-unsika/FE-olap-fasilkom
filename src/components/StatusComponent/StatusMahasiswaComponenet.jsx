import React, { useEffect } from "react";
import $ from "jquery";
const StatusMahasiswaComponenet = ({ status }) => {
  useEffect(() => {
    $('[data-toggle="popover"]').popover({
      container: "body",
    });
  }, []);

  return (
    <>
      <h6 class="card-title">Status Mahasiswa</h6>
      <div
        className="badge badge-success"
        data-toggle="popover"
        data-trigger="hover"
        data-content={status?.name}
      >
        {status?.id}
      </div>
    </>
  );
};

export default StatusMahasiswaComponenet;
