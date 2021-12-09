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
