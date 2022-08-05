import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateToPrettyString } from 'services/DateServices';

const Task = ({toDoTask, deleteTask, setSelectedTask}) => {
    
    const taskDateView = formatDateToPrettyString(toDoTask.start);

    const handleClickDelete = () => {
        deleteTask(toDoTask.id);
    }

    const Navigate = useNavigate();

    const handleClickEdit = () => {
        setSelectedTask(toDoTask)
        Navigate(("/editTask"));
    }

    return (
    <>
        <h3> { taskDateView } </h3>
        <h4> { toDoTask.title } </h4>
        <p> Status: { toDoTask.completed ? "complete" : "incomplete" } </p>
        <p> For: { toDoTask.plant.plantNameOne }, Status: { toDoTask.plant.status } </p>
        <p> { toDoTask.taskDescription }</p>
        <img className ="edit-icon" src="http://localhost:8080/draw.png" alt="edit icon" onClick = { handleClickEdit } />
        <img className ="delete-icon" src="http://localhost:8080/delete.png" alt="delete icon" onClick = { handleClickDelete } />
    </>
    )
}

export default Task;