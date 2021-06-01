import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN,
    LOGOUT,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
} from './types';
import {AuthApi} from "../../Api";

export const signIn = (values) => async (dispatch) => {
    const { email, password } = values;

    try {
        const user = await AuthApi.signInWithEmailAndPassword(email, password)

        dispatch({ type: LOGIN_SUCCESS, payload: user });

    } catch (err) {
        console.log(err);

        dispatch({ type: LOGIN_FAIL, payload: err});
    }
};

export const logIn = () => async dispatch => {
    dispatch({
        type: LOGIN
    })
}

export const logOut = () => async dispatch => {
    localStorage.removeItem('jwt_token')
    dispatch({
        type: LOGOUT
    })
}