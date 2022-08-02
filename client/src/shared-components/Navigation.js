import React from 'react';
import { Link } from "react-router-dom"

const Navigation = ({selectedMenu, setSelectedMenu}) => {

    const handleClick = (event) => {
        if (event.target.innerText === "Calendar") {
            setSelectedMenu("calendar");
        } else if (event.target.innerText === "To Do") {
            setSelectedMenu("To Do");
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
                        className = { selectedMenu === "To Do" ? "menu-link-selected" : "menu-link" }
                        onClick = { handleClick } >To Do
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )

}

export default Navigation;