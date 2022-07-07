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
import EditPlant from "../components/EditPlant";
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

  const createPlant = newPlant => {
    PlantServices.addPlant(newPlant)
      .then(savedPlant => setPlants([ ...plants, savedPlant ]));
  };

  const deletePlant = idToDelete => {
    PlantServices.deletePlant(idToDelete);
    setPlants(plants.filter(plant => plant.id !== idToDelete));
  };

  const editPlant = editedPlant => {
    
    // send edited plant to db
    PlantServices.updatePlant(editedPlant);
    
    // update locally
    const editedPlantIndex = plants.findIndex(plant => plant.id === editedPlant.id);
    const updatedPlants = [...plants];
    updatedPlants[editedPlantIndex] = editedPlant;
    setPlants(updatedPlants);
  };

  return (
    <>
      <Router>
        <AppHeader />
        <Navigation />
        <Routes>
          <Route path="/upcomingCare" element = {<UpcomingTaskList/>} />
          <Route path="/allPlants" element = {<PlantList plants = { plants } setSelectedPlant = {setSelectedPlant} deletePlant = {deletePlant}/>}/>
          <Route path="/calendar" element = {<Calendar />} />
          <Route path="/plantDetails" element = {<PlantDetails selectedPlant = {selectedPlant}  />} />
          <Route path="/createPlant" element = {<PlantCreation createPlant = {createPlant} gardens = {gardens} />} />
          <Route path="/editPlant" element = {<EditPlant editPlant = {editPlant} selectedPlant = {selectedPlant} gardens = {gardens} />} />
        </Routes>
      </Router>
    </>
  );
}

export default PlantManagement;