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
        <Link to="/createTask" className = "add-buttons">Add new task</Link>
        <Calendar localizer={localizer} events = { tasks }
        startAccessor = "start" endAccessor="end"
        style={{height: "70vh", marginTop: "2vw"}}
        />
        </>
    );
}

export default CalendarViewer;