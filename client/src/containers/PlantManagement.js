import React, {useState,useEffect} from "react";
import AppHeader from '../components/AppHeader';
import Navigation from '../components/Navigation';
import UpcomingTaskList from "../components/UpcomingTaskList";
import PlantList from "../components/PlantList";
import Calendar from "../components/Calendar";
import PlantServices from "../services/PlantServices";
import GardenServices from "../services/GardenServices";
import TaskServices from "../services/TaskServices";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const PlantManagement = () => {

  const [plants, setPlants] = useState([]);
  const [gardens, setGardens] = useState([]);
  const [tasks, setTasks] = useState([]);

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
          <Route path="/allPlants" element = {<PlantList plants = { plants } />}/>
          <Route path="/calendar" element = {<Calendar />} />
        </Routes>
      </Router>
    </>
  );
}

export default PlantManagement;