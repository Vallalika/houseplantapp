import React from 'react';

const Task = ({taskDetails}) => {
    
    return (
    <>
        <h4> {taskDetails.taskDate} </h4>
        <p> {taskDetails.plant.plantNameOne} - {taskDetails.taskName} </p>
        <p> {taskDetails.taskDescription} </p>
        <p> Status: {taskDetails.completed ? "complete" : "incomplete" } </p>
        
    </>
    )
}

export default Task;