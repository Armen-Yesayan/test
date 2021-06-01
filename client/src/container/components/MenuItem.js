import React from 'react';
import {Link} from "react-router-dom";
import FontAwesome from 'react-fontawesome'

const MenuItem = (props) => {
    return (
        <li className='menuItem'>
            <Link to={props.link}>
                <FontAwesome className='menu-icon' name={props.iconName}/>
                <span className='linkText'>{props.linkText}</span>
            </Link>
        </li>
    );
};

export default MenuItem;