import React from "react";
import { Link } from "react-router-dom";

function CardStatisticComponent({ title, value, bg, icon, url, colSize }) {
  return (
    <div className={colSize}>
      <Link to={url}>
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
      </Link>
    </div>
  );
}

export default CardStatisticComponent;
