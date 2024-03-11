import React from 'react';
import { Link } from 'react-router-dom';
import { appConstants } from 'appConstants';

const Navigation = ({ selectedMenu, setSelectedMenu }) => {
  const handleClick = (event) => {
    if (event.target.innerText === 'Calendar') {
      setSelectedMenu(appConstants.CALENDAR_MENU);
    } else if (event.target.innerText === 'To Do') {
      setSelectedMenu(appConstants.TODO_MENU);
    } else {
      setSelectedMenu(appConstants.PLANTS_MENU);
    }
  };

  return (
    <nav>
      <ul className='menu-wrapper'>
        <li>
          <p
            className={
              selectedMenu === appConstants.PLANTS_MENU
                ? 'menu-link-selected'
                : 'menu-link'
            }
            onClick={handleClick}
          >
            Plants
          </p>
          <p
            className={
              selectedMenu === appConstants.CALENDAR_MENU
                ? 'menu-link-selected'
                : 'menu-link'
            }
            onClick={handleClick}
          >
            Calendar
          </p>
          <p
            className={
              selectedMenu === appConstants.TODO_MENU
                ? 'menu-link-selected'
                : 'menu-link'
            }
            onClick={handleClick}
          >
            To Do
          </p>
          {/* <Link
            to='/'
            className={
              selectedMenu === 'plants' ? 'menu-link-selected' : 'menu-link'
            }
            onClick={handleClick}
          >
            Plants
          </Link> */}
        </li>

        <li>
          {/* <Link
            to='/calendar'
            className={
              selectedMenu === 'calendar' ? 'menu-link-selected' : 'menu-link'
            }
            onClick={handleClick}
          >
            Calendar
          </Link> */}
        </li>

        <li>
          {/* <Link
            to='/toDo'
            className={
              selectedMenu === 'to-do' ? 'menu-link-selected' : 'menu-link'
            }
            onClick={handleClick}
          >
            To Do
          </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
