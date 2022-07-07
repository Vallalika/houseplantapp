import React from 'react';
import { Link } from "react-router-dom"

const Navigation = () => {

    return (

        <>
            <ul>
                <li><Link to="/upcomingCare">Upcoming Care</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/allPlants">All Plants</Link></li>
            </ul>
        </>
    )

}

export default Navigation;