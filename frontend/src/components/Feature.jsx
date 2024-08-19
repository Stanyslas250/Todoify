import React from "react";

function Feature(props) {
  return (
    <div className="card bg-primary/10 w-96 h-56 shadow-xl" key={props.key}>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Feature;
