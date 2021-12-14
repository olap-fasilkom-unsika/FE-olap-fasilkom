import React, { useEffect } from "react";
import $ from "jquery";
const StatusPersetujuanComponenet = ({ status }) => {
  useEffect(() => {
    $('[data-toggle="popover"]').popover({
      container: "body",
    });
  }, []);

  const accepted = <i className="fas fa-check"></i>;
  const refused = <i className="fas fa-times"></i>;

  return (
    <>
      <div
        className={
          status?.id === "1" ? "badge badge-success" : "badge badge-danger"
        }
        data-toggle="popover"
        data-trigger="hover"
        data-content={status?.name}
      >
        {status?.id === "1" ? accepted : refused}
      </div>
    </>
  );
};

export default StatusPersetujuanComponenet;
