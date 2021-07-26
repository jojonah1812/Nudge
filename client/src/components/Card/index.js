import React from "react";

function Card({ position, children }) {
  return (
    <div className="card mt-4">
      {/* <div className="card-header">{position}</div> */}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;