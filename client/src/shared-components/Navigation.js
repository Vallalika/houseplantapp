import React from 'react';
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
        </li>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
