import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { appConstants } from './appConstants';

import PlantRoutes from 'routes/PlantRoutes';
import TasksRoutes from 'routes/TasksRoutes';

import AppHeader from 'shared-components/AppHeader';
import Navigation from 'shared-components/Navigation';

import CalendarViewer from 'pages/CalendarViewer';

import PlantServices from 'services/PlantServices';
import GardenServices from 'services/GardenServices';
import TaskServices from 'services/TaskServices';
import { sortTasks } from 'services/DateServices';

const PlantManagement = () => {
  const [plants, setPlants] = useState([]);
  const [gardens, setGardens] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [selectedPlant, setSelectedPlant] = useState({});
  const [selectedTask, setSelectedTask] = useState({});
  const [selectedMenu, setSelectedMenu] = useState(
    getSessionStorage('menu', appConstants.PLANTS_MENU)
  );

  useEffect(() => {
    PlantServices.getPlants().then((plants) => setPlants(plants));

    GardenServices.getGardens().then((gardens) => setGardens(gardens));

    TaskServices.getTasks().then((tasks) => setTasks(tasks));
  }, []);

  useEffect(() => {
    sessionStorage.setItem('menu', selectedMenu);
  }, [selectedMenu]);

  // Session storage to ensure menu stays selected after page reload
  function getSessionStorage(key, defaultValue) {
    const currentMenu = sessionStorage.getItem(key);
    if (!currentMenu) {
      return defaultValue;
    }
    return currentMenu;
  }

  // Plant functionalities

  const createPlant = (newPlant) => {
    PlantServices.addPlant(newPlant).then((savedPlant) =>
      setPlants([...plants, savedPlant])
    );
  };

  const deletePlant = (idToDelete) => {
    PlantServices.deletePlant(idToDelete);
    setPlants(plants.filter((plant) => plant.id !== idToDelete));
    setTasks(tasks.filter((task) => task.plant.id !== idToDelete));
  };

  const editPlant = (editedPlant) => {
    // send edited plant to db, then update locally with the data from the db
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
    // send edited task to db, then update state with new task
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
      <Routes>
        <Route
          path='/'
          element={
            <Navigate
              to={`/${appConstants.PLANTS_MENU}`}
              replace
            />
          }
        />
        <Route
          path={`/${appConstants.PLANTS_MENU}/*`}
          element={
            <PlantRoutes
              gardens={gardens}
              plants={plants}
              selectedPlant={selectedPlant}
              setSelectedPlant={setSelectedPlant}
              createPlant={createPlant}
              editPlant={editPlant}
              deletePlant={deletePlant}
            />
          }
        />
        <Route
          path={`/${appConstants.CALENDAR_MENU}`}
          element={
            <CalendarViewer
              tasks={tasks}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
              createTask={createTask}
            />
          }
        />
        <Route
          path={`/tasks/*`}
          element={
            <TasksRoutes
              plants={plants}
              tasks={tasks}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
              createTask={createTask}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          }
        />
      </Routes>
    </>
  );
};

export default PlantManagement;
