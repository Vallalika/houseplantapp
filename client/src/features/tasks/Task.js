import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateToPrettyString } from 'services/DateServices';

const Task = ({upcomingTask, deleteTask, setSelectedTask}) => {
    
    const taskDateView = formatDateToPrettyString(upcomingTask.start);

    const handleClickDelete = () => {
        deleteTask(upcomingTask.id);
    }

    const Navigate = useNavigate();

    const handleClickEdit = () => {
        setSelectedTask(upcomingTask)
        Navigate(("/editTask"));
    }

    return (
    <>
        <h3> { taskDateView } </h3>
        <h4> { upcomingTask.title } </h4>
        <p> Status: { upcomingTask.completed ? "complete" : "incomplete" } </p>
        <p> For: { upcomingTask.plant.plantNameOne }, Status: { upcomingTask.plant.status } </p>
        <p> { upcomingTask.taskDescription }</p>
        <img className ="edit-icon" src="http://localhost:8080/draw.png" alt="edit icon" onClick = { handleClickEdit } />
        <img className ="delete-icon" src="http://localhost:8080/delete.png" alt="delete icon" onClick = { handleClickDelete } />
    </>
    )
}

export default Task;