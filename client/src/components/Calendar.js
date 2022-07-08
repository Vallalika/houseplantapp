import React from "react";
import Task from "./Task";
import { Link } from "react-router-dom";

const Calendar = ({ tasks }) => {

    const mapTasks = tasks.map((task, index) =>
        <Task
            key={index}
            className={task.taskName}
            plantDetails = {task}
            taskDetails = {task}
            />)

    return (
        <>
        <h3>All tasks</h3>
        <button><Link to="/createTask">Add new task</Link></button>
        {mapTasks}
        </>
    );
}

export default Calendar;