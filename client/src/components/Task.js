import React from 'react';
import { formatDateToPrettyString } from '../services/DateFormattingServices';

const Task = ({upcomingTask}) => {
    
    const taskDateView = formatDateToPrettyString(upcomingTask.start);

    return (
    <>
        <h3> { taskDateView } </h3>
        <h4> { upcomingTask.title } </h4>
        <p> Status: { upcomingTask.completed ? "complete" : "incomplete" } </p>
        <p> For: { upcomingTask.plant.plantNameOne }, Status: { upcomingTask.plant.status } </p>
        <p> { upcomingTask.taskDescription }</p>
        
    </>
    )
}

export default Task;