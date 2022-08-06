import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AppHeader from "shared-components/AppHeader";
import Navigation from "shared-components/Navigation";


import ToDoList from "pages/ToDoList";
import PlantList from "pages/PlantList";
import CalendarViewer from "pages/CalendarViewer";


import PlantDetails from "features/plants/PlantDetails";
import PlantCreation from "features/plants/PlantCreation";
import EditPlant from "features/plants/EditPlant";
import TaskCreation from "features/tasks/TaskCreation";
import EditTask from "features/tasks/EditTask";


import PlantServices from "services/PlantServices";
import GardenServices from "services/GardenServices";
import TaskServices from "services/TaskServices";

const PlantManagement = () => {

  const [plants, setPlants] = useState([]);
  const [gardens, setGardens] = useState([]);
  const [tasks, setTasks] = useState([]);
  
  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedTask, setSelectedTask] = useState({});
  const [selectedMenu, setSelectedMenu] = useState(getSessionStorage("menu","plants"));

  useEffect(() => {
    PlantServices.getPlants()
      .then(plants => setPlants(plants));
    
    GardenServices.getGardens()
      .then(gardens => setGardens(gardens));
    
    TaskServices.getTasks()
    .then(tasks => setTasks(tasks));

  }, []);

  useEffect(() => {
    sessionStorage.setItem("menu",selectedMenu);
  }, [selectedMenu]);


  // Session storage to ensure menu stays selected after page reload
  function getSessionStorage (key, defaultValue) {
    const currentMenu = sessionStorage.getItem(key);
    if (!currentMenu) {
      return defaultValue;
    }
    return currentMenu;
  }

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
    
    // update locally
    const editedPlantIndex = plants.findIndex(plant => plant.id === editedPlant.id);
    const updatedPlants = [...plants];
    updatedPlants[editedPlantIndex] = editedPlant;
    setPlants(updatedPlants);

  };

  // Task functionalities
  const createTask = newTask => {
    TaskServices.addTask(newTask)
    .then(savedTask =>
        setTasks([ ...tasks, savedTask ]));
        // To-Do: Sort task in list
    };

  const deleteTask = idToDelete => {
    TaskServices.deleteTask(idToDelete);
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

  const editTask = editedTask => {
    
    // send edited task to db, then update state with new task
    // TO-DO: just update locally later
    TaskServices.updateTask(editedTask)
      .then(() => TaskServices.getTasks())
      .then(tasks => setTasks(tasks));

  };

  return (
    <>
      <Router>

        <AppHeader />
        <Navigation selectedMenu = { selectedMenu } setSelectedMenu = { setSelectedMenu } />

        <Routes>
          
          <Route path="/toDo"
                element = {<ToDoList
                          tasks = { tasks }
                          setSelectedTask = { setSelectedTask }
                          deleteTask = { deleteTask } />} />
          
          <Route path="/editTask"
                element = {<EditTask
                          selectedTask = { selectedTask }
                          setSelectedTask = { setSelectedTask }
                          plants = { plants }
                          editTask = { editTask }
                          deleteTask = { deleteTask } />} />

          <Route path="/"
                  element = {<PlantList
                            plants = { plants }
                            setSelectedPlant = { setSelectedPlant }
                            deletePlant = { deletePlant }/>}/>
          
          <Route path="/calendar"
                element = {<CalendarViewer
                            tasks = { tasks }
                            selectedTask = { selectedTask }
                            setSelectedTask = { setSelectedTask }
                            />} />
          
          <Route path="/plantDetails"
                element = {<PlantDetails
                          selectedPlant = { selectedPlant }
                          setSelectedPlant = { setSelectedPlant }  />} />
          
          <Route path="/createPlant"
                element = {<PlantCreation
                          createPlant = { createPlant }
                          gardens = { gardens } />} />
          
          <Route path="/editPlant"
                element = {<EditPlant
                          editPlant = { editPlant }
                          selectedPlant = { selectedPlant }
                          gardens = { gardens } />} />
          
          <Route path="/createTask"
                element = {<TaskCreation
                          createTask = { createTask }
                          plants = { plants }
                          setSelectedMenu = { setSelectedMenu }/>} />
        
        </Routes>

      </Router>
    </>
  );
}

export default PlantManagement;