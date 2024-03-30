import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { appConstants } from './appConstants';

import PlantRoutes from 'routes/PlantRoutes';
import TasksRoutes from 'routes/TasksRoutes';

import AppHeader from 'shared-components/AppHeader';
import Navigation from 'shared-components/Navigation';

import PlantServices from 'services/PlantServices';
import GardenServices from 'services/GardenServices';
import TaskServices from 'services/TaskServices';

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
              setPlants={setPlants}
              selectedPlant={selectedPlant}
              setSelectedPlant={setSelectedPlant}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route
          path={`/${appConstants.TASKS_HOME_ROUTE}/*`}
          element={
            <TasksRoutes
              plants={plants}
              tasks={tasks}
              setTasks={setTasks}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          }
        />
      </Routes>
    </>
  );
};

export default PlantManagement;
