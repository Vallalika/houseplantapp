import React from 'react';
import { Link } from "react-router-dom"

const Navigation = ({selectedMenu, setSelectedMenu}) => {

    const handleClick = (event) => {
        console.log(event);
        if (event.target.innerText === "Calendar") {
            setSelectedMenu("calendar");
        } else if (event.target.innerText === "Upcoming Care") {
            setSelectedMenu("upcomingCare");
        } else {
            setSelectedMenu("allPlants");
        }

    }

    return (

        <>
            <nav>
                <ul className="menu-wrapper">
                    
                    <li><Link to="/allPlants"
                        className = { selectedMenu === "allPlants" ? "menu-link-selected" : "menu-link" }
                        onClick = { handleClick } >All Plants</Link>
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