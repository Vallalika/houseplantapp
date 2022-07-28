import React, { useState } from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { formatDateToPrettyString } from "services/DateServices";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from  "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarViewer = ({ tasks, selectedTask, setSelectedTask }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const isEventCompleted = (boolValue) => {
        if  (boolValue === true ) {
            return "Yes";
        } else {
            return "No";
        }
    }

    const handleSelectedEvent = (event) => {
        setSelectedTask(event);
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedTask({});
    }

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
            style={{height: 450, marginTop: "2vw", position: "static", zIndex: "0"}}
            onSelectEvent = { handleSelectedEvent }
            popup
            />
            <Modal className = { `modal-${isModalOpen === true ? 'show' : 'hide'}` } overlayClassName = "modal-overlay" isOpen = { isModalOpen } ariaHideApp = { false } contentLabel = "Task Details">
                { isModalOpen
                &&
                <>
                    <p className="plantcard-field-titles">{formatDateToPrettyString(selectedTask.start)}</p>
                    <p>{selectedTask.plant.plantNameOne}</p>
                    <br />
                    <p><span className="plantcard-field-titles">Title: </span>{selectedTask.title}</p>
                    <p><span className="plantcard-field-titles">Description: </span>{selectedTask.taskDescription}</p>
                    <p><span className="plantcard-field-titles">Completed: </span> {isEventCompleted(selectedTask.completed)}</p>
                    <br />
                    <button className="centered-button" onClick={ handleModalClose }>Close</button>
                </> }
            </Modal>
        </>
    );
}

export default CalendarViewer;