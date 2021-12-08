import React from "react";

function CardStatisticComponent({ title, value, bg, icon }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
      <div className="card card-statistic-1">
        <div className={bg}>
          <i className={icon}></i>
        </div>
        <div className="card-wrap">
          <div className="card-header">
            <h4>{title}</h4>
          </div>
          <div className="card-body">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default CardStatisticComponent;
