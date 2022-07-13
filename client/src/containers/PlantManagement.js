import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { isUpcomingTask, sortUpcomingTasks } from "../services/DateServices";

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
import EditTask from "../components/EditTask";


const PlantManagement = () => {

  const [plants, setPlants] = useState([]);
  const [gardens, setGardens] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [upcomingTasks, setUpcomingTasks] = useState([]);
  
  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedTask, setSelectedTask] = useState({});
  const [selectedMenu, setSelectedMenu] = useState("plants");

  useEffect(() => {
    PlantServices.getPlants()
      .then(plants => setPlants(plants));
    
    GardenServices.getGardens()
      .then(gardens => setGardens(gardens));
    
    TaskServices.getTasks()
    .then(tasks => setTasks(tasks));

    TaskServices.getUpcomingCareTasks()
    .then(upcomingTasks => sortUpcomingTasks(upcomingTasks))
    .then(upcomingTasks => setUpcomingTasks(upcomingTasks));

  }, []);

  // Plant functionalities
  const createPlant = newPlant => {
    PlantServices.addPlant(newPlant)
      .then(savedPlant => setPlants([ ...plants, savedPlant ]));
  };

  const deletePlant = idToDelete => {
    PlantServices.deletePlant(idToDelete);
    setPlants(plants.filter(plant => plant.id !== idToDelete));
    setTasks(tasks.filter(task => task.plant.id !== idToDelete));
  };

  const editPlant = editedPlant => {
    
    // send edited plant to db
    PlantServices.updatePlant(editedPlant);
    console.log("From PlantManagement after plantservices updated" + editedPlant);
    
    // update locally
    const editedPlantIndex = plants.findIndex(plant => plant.id === editedPlant.id);
    const updatedPlants = [...plants];
    updatedPlants[editedPlantIndex] = editedPlant;
    setPlants(updatedPlants);
    console.log("After setPlants: "+ updatedPlants);
  };

  // Task functionalities
  const createTask = newTask => {
    if (isUpcomingTask(newTask)) {
      let upcomingTasksUpdated = [...upcomingTasks];
      upcomingTasksUpdated.push(newTask);
      upcomingTasksUpdated = sortUpcomingTasks(upcomingTasksUpdated);
      setUpcomingTasks(upcomingTasksUpdated);
    }
    
    TaskServices.addTask(newTask)
    .then(savedTask =>
        setTasks([ ...tasks, savedTask ]));
    };

  const deleteTask = idToDelete => {
    TaskServices.deleteTask(idToDelete);
    setTasks(tasks.filter(task => task.id !== idToDelete));
    setUpcomingTasks(upcomingTasks.filter(upcomingTask => upcomingTask.id != idToDelete));
  };

  const editTask = editedTask => {
    
    // send edited task to db
    TaskServices.updateTask(editedTask)
      .then(() => {
        TaskServices.getUpcomingCareTasks()
          .then(upcomingTasks => sortUpcomingTasks(upcomingTasks))
          .then(upcomingTasks => {
            setUpcomingTasks(upcomingTasks)
            return upcomingTasks
        })
        .then(upcomingTasks => console.log(upcomingTasks));
      })
    
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
        <Navigation selectedMenu = { selectedMenu } setSelectedMenu = { setSelectedMenu } />

        <Routes>
          
          <Route path="/upcomingCare"
                element = {<UpcomingTaskList
                          upcomingTasks = {upcomingTasks}
                          setSelectedTask = {setSelectedTask}
                          deleteTask = { deleteTask } />} />
          
          <Route path="/editTask"
                element = {<EditTask
                          selectedTask = {selectedTask}
                          setSelectedTask = {setSelectedTask}
                          plants = {plants}
                          editTask = {editTask}
                          deleteTask = { deleteTask } />} />

          <Route path="/"
                  element = {<PlantList
                            plants = { plants }
                            setSelectedPlant = {setSelectedPlant}
                            deletePlant = {deletePlant}/>}/>
          
          <Route path="/calendar"
                element = {<CalendarViewer
                            tasks = { tasks }/>} />
          
          <Route path="/plantDetails"
                element = {<PlantDetails
                          selectedPlant = {selectedPlant}
                          setSelectedPlant = {setSelectedPlant}  />} />
          
          <Route path="/createPlant"
                element = {<PlantCreation
                          createPlant = {createPlant}
                          gardens = {gardens} />} />
          
          <Route path="/editPlant"
                element = {<EditPlant
                          editPlant = {editPlant}
                          selectedPlant = {selectedPlant}
                          gardens = {gardens} />} />
          
          <Route path="/createTask"
                element = {<TaskCreation
                          createTask = { createTask }
                          plants = { plants } />} />
        
        </Routes>

      </Router>
    </>
  );
}

export default PlantManagement;