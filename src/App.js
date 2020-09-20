import React, { useState } from "react";
import MissionForm from "./components/MissionForm";
import MissionsList from "./components/MissionsList";
import "./styles.css";
import axios from "axios";

export default function App() {
  //states

  //state to handle errors
  const [error, setError] = useState("");
  //state is true or false - looking for data or not
  const [isFetchingData, setIsFetchingData] = useState(false);
  //state to hold fetched data
  const [missions, setMissions] = useState([]);

  //function to get data from btn click - using axios
  const getData = () => {
    // console.log("push");

    setIsFetchingData(true);

    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        setMissions(response.data);
        setIsFetchingData(false);
        console.log(missions);
      })
      .catch((error) => {
        console.log(`This is your axios error: ${error}`);
        setError(error);
        setIsFetchingData(false);
      });
  };

  return (
    <div className="App">
      <h1>Space X Upcoming Missions</h1>
      <MissionForm getData={getData} isFetchingData={isFetchingData} />
      <MissionsList error={error} missions={missions} />
    </div>
  );
}
