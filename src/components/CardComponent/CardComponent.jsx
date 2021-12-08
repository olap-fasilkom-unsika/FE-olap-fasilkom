import React from "react";

function CardComponent({ title, body }) {
  return (
    <div className="card">
      <div className="card-header">
        <h4>{title}</h4>
      </div>
      <div className="card-body">{body}</div>
    </div>
  );
}

export default CardComponent;
