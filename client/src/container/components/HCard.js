import React from 'react';
import FontAwesome from 'react-fontawesome';
import CountTo from "react-count-to/dist/react-count-to";

const HCard = (props) => {
    let iconClass = `iconWrapper ${props.backgroundColor}`;
    return (
        <div className='hCard card'>
            <div className={iconClass}>
                <FontAwesome name={props.iconName} size='3x' />
            </div>
            <div className='dataWrapper text-light'>
                <p className='number'>{props.prefix}<CountTo to={props.number} speed={1000} />{props.suffix}</p>
                <p className='label'>{props.label}</p>
            </div>
        </div>
    );
};

export default HCard;