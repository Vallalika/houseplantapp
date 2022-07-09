import React from 'react';
import { formatDateToString } from '../services/StringDateServices';

const Task = ({upcomingTask}) => {
    
    const taskDateView = formatDateToString(upcomingTask.start);

    return (
    <>
        <h3> { taskDateView } </h3>
        <h3> {upcomingTask.title} </h3>
        <p> {upcomingTask.taskDescription}</p>
        <p> {upcomingTask.taskDescription}</p>
        <p> Status: {upcomingTask.completed ? "complete" : "incomplete" } </p>
        <p> {upcomingTask.plant.plantNameOne} </p>
        
    </>
    )
}

export default Task;