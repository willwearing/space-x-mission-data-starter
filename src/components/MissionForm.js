import React from "react";

const MissionForm = (props) => {
  return (
    <div>
      {props.isFetchingData ? (
        <p>Loading upcoming missions...</p>
      ) : (
        <button onClick={props.getData}>Get updated missions</button>
      )}
    </div>
  );
};

export default MissionForm;
