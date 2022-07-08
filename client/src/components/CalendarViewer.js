import React from "react";
import { Link } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from  "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Task from "./Task";


const CalendarViewer = ({ tasks }) => {

    const mapTasks = tasks.map((task, index) =>
        <Task
            key={index}
            className={task.taskName}
            plantDetails = {task}
            taskDetails = {task}
            />)

    const locales = {
        "en-GB": require("date-fns/locale/en-GB")
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales
    })

    // const tasks = [
    //     {
    //         title: "Big Meeting",
    //         allDay: true,
    //         start: new Date(2022,6,5),
    //         end: new Date(2022,6,7),
    //         completed: true
    //     }]

    return (
        <>
        <h3>All tasks</h3>
        <button><Link to="/createTask">Add new task</Link></button>
        <Calendar localizer={localizer} events = {tasks}
        startAccessor = "start" endAccessor="end" style={{height: 500, margin: "50px"}}  />
        {/* {mapTasks} */}
        </>
    );
}

export default CalendarViewer;