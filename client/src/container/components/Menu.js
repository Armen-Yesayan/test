import React from 'react';
import MenuItem from "./MenuItem";
import AccountMenu from "./AccountMenu";

const Menu = () => {
    return (
        <div>
            <div className='brand'>
                <h2 className='title'>DataBase Dashboard</h2>
            </div>
            <ul>
                <MenuItem link='/dashboard' linkText='Dashboard' iconName='home'/>
                <MenuItem link='/create-database' linkText='Database' iconName='database'/>
            </ul>
        </div>
    );
};

export default Menu;