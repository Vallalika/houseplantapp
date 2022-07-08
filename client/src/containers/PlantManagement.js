import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AppHeader from '../components/AppHeader';
import Navigation from '../components/Navigation';
import UpcomingTaskList from "../components/UpcomingTaskList";
import PlantList from "../components/PlantList";
import CalendarViewer from "../components/CalendarViewer";
import PlantDetails from "../components/PlantDetails";
import PlantServices from "../services/PlantServices";
import GardenServices from "../services/GardenServices";
import TaskServices from "../services/TaskServices";
import PlantCreation from "../components/PlantCreation";
import TaskCreation from "../components/TaskCreation";
import EditPlant from "../components/EditPlant";


const PlantManagement = () => {

  const [plants, setPlants] = useState([]);
  const [gardens, setGardens] = useState([]);
  const [tasks, setTasks] = useState([]);
  
  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedTask, setSelectedTask] = useState({});

  // const [testTask, setTestTask] = useState(
  //   {
  //   "id": 1,
  //   "taskName": "Water plant",
  //   "taskDescription": null,
  //   "start": "2022-06-03",
  //   "end": "2022-06-04",
  //   "completed": false
  //   }
  // );

  useEffect(() => {
    PlantServices.getPlants()
      .then(plants => setPlants(plants));
    
    GardenServices.getGardens()
      .then(gardens => setGardens(gardens));
    
    TaskServices.getTasks()
    .then(tasks => setTasks(tasks));

  }, []);
  
  // const convertTaskDate = () => {
  //   let updatedTestTask = {...testTask}
  //   const stringDate = updatedTestTask.start;
  //   console.log(stringDate);
  //   updatedTestTask.start = new Date(stringDate);
  //   console.log(JSON.stringify(updatedTestTask));
  // }

  // convertTaskDate();

  // Plant functionalities
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

  // Task functionalities
  const createTask = newTask => {
    TaskServices.addTask(newTask)
      .then(savedTask => setTasks([ ...tasks, savedTask ]));
  };

  const deleteTask = idToDelete => {
    TaskServices.deleteTask(idToDelete);
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

  const editTask = editedTask => {
    
    // send edited task to db
    TaskServices.updateTask(editedTask);
    
    // update locally
    const editedTaskIndex = tasks.findIndex(task => task.id === editedTask.id);
    const updatedTasks = [...tasks];
    updatedTasks[editedTaskIndex] = editedTask;
    setTasks(updatedTasks);
  };

  return (
    <>
      <Router>
        <AppHeader />
        <Navigation />
        <Routes>
          <Route path="/upcomingCare" element = {<UpcomingTaskList/>} />
          <Route path="/allPlants" element = {<PlantList plants = { plants } setSelectedPlant = {setSelectedPlant} deletePlant = {deletePlant}/>}/>
          <Route path="/calendar" element = {<CalendarViewer tasks = { tasks }/>} />
          <Route path="/plantDetails" element = {<PlantDetails selectedPlant = {selectedPlant}  />} />
          <Route path="/createPlant" element = {<PlantCreation createPlant = {createPlant} gardens = {gardens} />} />
          <Route path="/editPlant" element = {<EditPlant editPlant = {editPlant} selectedPlant = {selectedPlant} gardens = {gardens} />} />
          <Route path="/createTask" element = {<TaskCreation createTask = { createTask } plants = { plants } />} />
        </Routes>
      </Router>
    </>
  );
}

export default PlantManagement;