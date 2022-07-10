import React from 'react';
import { Link } from "react-router-dom"

const Navigation = () => {

    return (

        <>
            <nav>
                <ul className="menu-wrapper">
                    <li><Link to="/allPlants" className="menu-link">All Plants</Link></li>
                    <li className="menu-link"><Link to="/calendar" className="menu-link">Calendar</Link></li>
                    <li><Link className="menu-link" to="/upcomingCare">Upcoming Care</Link></li>
                </ul>
            </nav>
        </>
    )

}

export default Navigation;