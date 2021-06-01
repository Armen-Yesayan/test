import React from 'react';
import AccountMenu from "./AccountMenu";

const Header = (props) => {
    return (
        <div className='header'>
            <h1>{props.pageTitle}</h1>
            <AccountMenu />
        </div>
    );
};

export default Header;