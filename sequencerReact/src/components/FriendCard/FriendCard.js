import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
   
    <div className="content">
      <ul>
        <li>
          <strong>Course:</strong> {props.name}
        </li>
        {/* <li>
          <strong>Title:</strong> {props.title}
        </li> */}
        {/* <li>
          <strong>Location:</strong> {props.location}
        </li> */}
      </ul>
    </div>
    <span onClick={() => props.changeCourse(props.id)} className="btn btn-primary">
      Select course
    </span>
  </div>
);

export default FriendCard;
