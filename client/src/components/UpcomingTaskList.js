import React, {useState} from 'react';
import Task from './Task';
import { Link } from 'react-router-dom';

const UpcomingTaskList = ({upcomingTasks}) => {

    const generateTaskList = upcomingTasks.map((upcomingTask, index) =>
        <Task
            key={index}
            upcomingTask = {upcomingTask}
            />)

    return (
    <>
        <button><Link to="/createTask">Add new task</Link></button>
        {generateTaskList}
    </>
    )
}

export default UpcomingTaskList;