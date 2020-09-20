import React from "react";

const MissionsList = (props) => {
  return (
    <div>
      {props.error ? (
        <p>{props.error}</p>
      ) : (
        props.missions.map((mission) => (
          <div>
            <h2>{mission.mission_name}</h2>
            <p>{mission.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MissionsList;
