import React from "react";
import { Link } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import PropTypes from 'prop-types';
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from  "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Task from "./Task";


const CalendarViewer = ({ tasks }) => {

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

    return (
        <>
        <h3>All tasks</h3>
        <button><Link to="/createTask">Add new task</Link></button>
        <Calendar localizer={localizer} events = { tasks }
        startAccessor = "start" endAccessor="end" style={{height: 500, margin: "50px"}}  />
        </>
    );
}

export default CalendarViewer;