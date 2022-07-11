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
        <Link to="/createTask" className = "add-task">Add new task</Link>
        {generateTaskList}
    </>
    )
}

export default UpcomingTaskList;