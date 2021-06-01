import React from 'react';
import {useDispatch} from "react-redux";
import {logOut} from "../../store/actions";

const AccountMenu = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logOut())
    }

    return (
        <div className='accountMenu'>
            <button className='btnCommon btnOutline' onClick={signOut}>Sign Out</button>
        </div>
    );
};

export default AccountMenu;