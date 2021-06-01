import React from 'react';
import { NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink className='navbar-brand' to='/'>DataBase Dashboard</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;