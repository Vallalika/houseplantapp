import React from 'react';
import { Link } from "react-router-dom"

const Navigation = ({selectedMenu, setSelectedMenu}) => {

    const handleClick = (event) => {
        if (event.target.innerText === "Calendar") {
            setSelectedMenu("calendar");
        } else if (event.target.innerText === "Upcoming Care") {
            setSelectedMenu("upcomingCare");
        } else {
            setSelectedMenu("plants");
        }

    }

    return (

        <>
            <nav>
                <ul className="menu-wrapper">
                    
                    <li><Link to="/"
                        className = { selectedMenu === "plants" ? "menu-link-selected" : "menu-link" }
                        onClick = { handleClick } >Plants</Link>
                    </li>

                    <li><Link to="/calendar"
                        className = { selectedMenu === "calendar" ? "menu-link-selected" : "menu-link" }
                        onClick = { handleClick } >Calendar</Link>
                    </li>

                    <li><Link to="/upcomingCare"
                        className = { selectedMenu === "upcomingCare" ? "menu-link-selected" : "menu-link" }
                        onClick = { handleClick } >Upcoming Care
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )

}

export default Navigation;