import React, { useState, useEffect } from 'react';

import AppHeader from 'shared-components/AppHeader';
import Navigation from 'shared-components/Navigation';

import ToDoList from 'pages/ToDoList';
import PlantList from 'pages/PlantList';
import CalendarViewer from 'pages/CalendarViewer';

import PlantDetails from 'features/plants/PlantDetails';
import EditPlant from 'features/plants/EditPlant';
import TaskCreation from 'features/tasks/TaskCreation';
import EditTask from 'features/tasks/EditTask';

import PlantServices from 'services/PlantServices';
import GardenServices from 'services/GardenServices';
import TaskServices from 'services/TaskServices';
import { sortTasks } from 'services/DateServices';

import { appConstants } from 'appConstants';

const PlantManagement = () => {
  const [gardens, setGardens] = useState([]);
  const [plants, setPlants] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [selectedTask, setSelectedTask] = useState({});
  const [selectedMenu, setSelectedMenu] = useState(
    getSessionStorage('menu', 'plants')
  );

  useEffect(() => {
    PlantServices.getPlants().then((plants) => setPlants(plants));
    // GardenServices.getGardens().then((gardens) => setGardens(gardens));
    TaskServices.getTasks().then((tasks) => setTasks(tasks));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('menu', selectedMenu);
  }, [selectedMenu]);

  // Session storage to ensure menu stays selected after page reload
  function getSessionStorage(key, defaultValue) {
    const currentKey = sessionStorage.getItem(key);
    return currentKey ? currentKey : defaultValue;
  }

  const deletePlant = (idToDelete) => {
    PlantServices.deletePlant(idToDelete);
    setPlants(plants.filter((plant) => plant.id !== idToDelete));
    setTasks(tasks.filter((task) => task.plant.id !== idToDelete));
  };

  const editPlant = (editedPlant) => {
    PlantServices.updatePlant(editedPlant).then((dbUpdatedPlant) => {
      const editedPlantIndex = plants.findIndex(
        (plant) => plant.id === editedPlant.id
      );
      const updatedPlants = [...plants];
      updatedPlants[editedPlantIndex] = dbUpdatedPlant;
      setPlants(updatedPlants);
    });
  };

  // Task functionalities
  const createTask = (newTask) => {
    TaskServices.addTask(newTask).then((savedTask) => {
      let updatedTasks = [...tasks];
      updatedTasks.push(savedTask);
      sortTasks(updatedTasks);
      setTasks(updatedTasks);
    });
  };

  const deleteTask = (idToDelete) => {
    TaskServices.deleteTask(idToDelete);
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  const editTask = (editedTask) => {
    TaskServices.updateTask(editedTask).then((dbUpdatedTask) => {
      const editedTaskIndex = tasks.findIndex(
        (task) => task.id === editedTask.id
      );
      const updatedTasks = [...tasks];
      updatedTasks[editedTaskIndex] = dbUpdatedTask;
      sortTasks(updatedTasks);
      setTasks(updatedTasks);
    });
  };

  return (
    <>
      <AppHeader />
      <Navigation
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />

      {selectedMenu === appConstants.PLANTS_MENU && (
        <PlantList
          gardens={gardens}
          plants={plants}
          setPlants={setPlants}
          setSelectedMenu={setSelectedMenu}
          deletePlant={deletePlant}
        />
      )}

      {selectedMenu === appConstants.CALENDAR_MENU && (
        <CalendarViewer
          tasks={tasks}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      )}

      {selectedMenu === appConstants.TODO_MENU && (
        <ToDoList
          tasks={tasks}
          setSelectedTask={setSelectedTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      )}
    </>
  );
};

export default PlantManagement;
