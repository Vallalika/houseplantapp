import React, {useState,useEffect} from "react";
import AppHeader from '../components/AppHeader';
import Navigation from '../components/Navigation';
import UpcomingTaskList from "../components/UpcomingTaskList";
import PlantList from "../components/PlantList";
import Calendar from "../components/Calendar";
import PlantDetails from "../components/PlantDetails";
import PlantServices from "../services/PlantServices";
import GardenServices from "../services/GardenServices";
import TaskServices from "../services/TaskServices";
import PlantCreation from "../components/PlantCreation";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const PlantManagement = () => {

  const [plants, setPlants] = useState([]);
  const [gardens, setGardens] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState({});

  useEffect(() => {
    PlantServices.getPlants()
      .then(plants => setPlants(plants));
    
    GardenServices.getGardens()
      .then(gardens => setGardens(gardens));
    
    TaskServices.getTasks()
    .then(tasks => setTasks(tasks));

  }, []);

  return (
    <>
      <Router>
        <AppHeader />
        <Navigation />
        <Routes>
          <Route path="/upcomingCare" element = {<UpcomingTaskList/>} />
          <Route path="/allPlants" element = {<PlantList plants = { plants } setSelectedPlant = {setSelectedPlant} />}/>
          <Route path="/calendar" element = {<Calendar />} />
          <Route path="/plantDetails" element = {<PlantDetails selectedPlant = {selectedPlant}  />} />
          <Route path="/createplant" element = {<PlantCreation />} />
        </Routes>
      </Router>
    </>
  );
}

export default PlantManagement;