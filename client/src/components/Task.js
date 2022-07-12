import React from 'react';
import { formatDateToPrettyString } from '../services/DateServices';
import { Link } from 'react-router-dom';

const Task = ({upcomingTask, deleteTask}) => {
    
    const taskDateView = formatDateToPrettyString(upcomingTask.start);

    const handleClick = () => {
        deleteTask(upcomingTask.id);
    }

    return (
    <>
        <h3> { taskDateView } </h3>
        <h4> { upcomingTask.title } </h4>
        <p> Status: { upcomingTask.completed ? "complete" : "incomplete" } </p>
        <p> For: { upcomingTask.plant.plantNameOne }, Status: { upcomingTask.plant.status } </p>
        <p> { upcomingTask.taskDescription }</p>
        <img className ="delete-icon" src="http://localhost:8080/delete.png" alt="delete icon" onClick = { handleClick } />
        
    </>
    )
}

export default Task;