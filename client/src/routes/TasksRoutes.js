import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ToDoList from 'pages/ToDoList';
import TaskCreation from 'features/tasks/TaskCreation';
import EditTask from 'features/tasks/EditTask';

const TasksRoutes = ({
  plants,
  tasks,
  selectedTask,
  setSelectedTask,
  createTask,
  editTask,
  deleteTask,
}) => {
  return (
    <Routes>
      <Route
        path='/to-do'
        element={
          <ToDoList
            tasks={tasks}
            setSelectedTask={setSelectedTask}
            createTask={createTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        }
      />

      <Route
        path='/:id/edit'
        element={
          <EditTask
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            plants={plants}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        }
      />

      <Route
        path='/new'
        element={
          <TaskCreation
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            plants={plants}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        }
      />
    </Routes>
  );
};

export default TasksRoutes;
