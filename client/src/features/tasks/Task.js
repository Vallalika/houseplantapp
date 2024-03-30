import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import TaskServices from 'services/TaskServices';

const Task = ({ tasks, toDoTask, setTasks, setSelectedTask }) => {
  const [isComplete, setIsComplete] = useState(toDoTask.completed);

  const navigate = useNavigate();

  const handleClickEdit = () => {
    setSelectedTask(toDoTask);
    navigate(`/tasks/${toDoTask.id}/edit`);
  };

  const handleClickDelete = () => {
    TaskServices.deleteTask(toDoTask.id);
    const updatedTasks = tasks.filter((task) => task.id !== toDoTask.id);
    setTasks(updatedTasks);
  };

  const handleIsCompleteChange = () => {
    setIsComplete(!isComplete);
  };

  return (
    <>
      <div className='table-wrapper'>
        <p> {toDoTask.title} </p>

        <input
          type='checkbox'
          name='isComplete'
          id='isComplete'
          value={isComplete}
          onChange={handleIsCompleteChange}
          checked={isComplete}
          required
        />

        <img
          className='centered-icons'
          src='http://localhost:8080/draw.png'
          alt='edit icon'
          onClick={handleClickEdit}
        />
        <img
          className='centered-icons'
          src='http://localhost:8080/delete.png'
          alt='delete icon'
          onClick={handleClickDelete}
        />
      </div>
    </>
  );
};

export default Task;
