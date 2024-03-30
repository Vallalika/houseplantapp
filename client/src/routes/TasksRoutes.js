import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { appConstants } from 'appConstants';

import CalendarViewer from 'pages/CalendarViewer';
import ToDoList from 'pages/ToDoList';
import TaskCreation from 'features/tasks/TaskCreation';
import EditTask from 'features/tasks/EditTask';

const TasksRoutes = ({
  plants,
  tasks,
  setTasks,
  selectedTask,
  setSelectedTask,
}) => {
  return (
    <Routes>
      <Route
        path={`/${appConstants.CALENDAR_MENU}`}
        element={
          <CalendarViewer
            tasks={tasks}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        }
      />
      <Route
        path={`/${appConstants.TODO_MENU}`}
        element={
          <ToDoList
            tasks={tasks}
            setTasks={setTasks}
            setSelectedTask={setSelectedTask}
          />
        }
      />
      <Route
        path='/:id/edit'
        element={
          <EditTask
            plants={plants}
            tasks={tasks}
            setTasks={setTasks}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
          />
        }
      />

      <Route
        path='/new'
        element={
          <TaskCreation
            plants={plants}
            tasks={tasks}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            setTasks={setTasks}
          />
        }
      />
    </Routes>
  );
};

export default TasksRoutes;
