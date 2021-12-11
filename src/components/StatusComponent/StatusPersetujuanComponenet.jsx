import React, { useEffect } from "react";
import $ from "jquery";
const StatusPersetujuanComponenet = ({ status }) => {
  useEffect(() => {
    $('[data-toggle="popover"]').popover({
      container: "body",
    });
  }, []);

  return (
    <>
      <div
        className="badge badge-success"
        data-toggle="popover"
        data-trigger="hover"
        data-content={status?.name}
      >
        {status?.id === '1' ? 'Disetujui' : "Tidak Disetujui"}
      </div>
    </>
  );
};

export default StatusPersetujuanComponenet;
