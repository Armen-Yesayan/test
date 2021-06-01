import React from 'react';
import {useDispatch} from "react-redux";
import {logOut} from "../../store/actions";
import {useHistory} from "react-router-dom";

const AccountMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        dispatch(logOut());
        history.push('/');
    }

    return (
        <div className='accountMenu'>
            <button className='btnCommon btnOutline' onClick={signOut}>Sign Out</button>
        </div>
    );
};

export default AccountMenu;
