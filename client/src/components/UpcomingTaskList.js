import React, {useState} from 'react';
import Task from './Task';
import { Link } from 'react-router-dom';

const UpcomingTaskList = ({ upcomingTasks, deleteTask }) => {

    const generateTaskList = upcomingTasks.map((upcomingTask, index) =>
        <Task
            key={index}
            upcomingTask = {upcomingTask}
            deleteTask = {deleteTask}
            />)

    return (
    <>
        <Link to="/createTask" className = "add-buttons">Add new task</Link>
        {generateTaskList}
    </>
    )
}

export default UpcomingTaskList;