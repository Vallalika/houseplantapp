import React from 'react';
import { appConstants } from 'appConstants';
import { Link } from 'react-router-dom';

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
    <>
      <nav>
        <ul className='menu-wrapper'>
          <li>
            <Link
              to={`/${appConstants.PLANTS_MENU}`}
              className={
                selectedMenu === appConstants.PLANTS_MENU
                  ? 'menu-link-selected'
                  : 'menu-link'
              }
              onClick={handleClick}
            >
              Plants
            </Link>
          </li>

          <li>
            <Link
              to={`/${appConstants.CALENDAR_MENU}`}
              className={
                selectedMenu === appConstants.CALENDAR_MENU
                  ? 'menu-link-selected'
                  : 'menu-link'
              }
              onClick={handleClick}
            >
              Calendar
            </Link>
          </li>

          <li>
            <Link
              to={`/tasks/${appConstants.TODO_MENU}`}
              className={
                selectedMenu === appConstants.TODO_MENU
                  ? 'menu-link-selected'
                  : 'menu-link'
              }
              onClick={handleClick}
            >
              To Do
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
