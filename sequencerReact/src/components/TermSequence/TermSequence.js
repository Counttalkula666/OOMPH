import React from "react";
import "./TermSequence.css";

const TermSequence = props => (
  <div className="card">
   
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Title:</strong> {props.title}
        </li>
        {/* <li>
          <strong>Location:</strong> {props.location}
        </li> */}
      </ul>
    </div>
    
  </div>
);

export default TermSequence;
