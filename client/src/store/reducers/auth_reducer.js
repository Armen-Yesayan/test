import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../actions/types";

const initialState = {
    loggedIn: false,
    user: null,
    error: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            localStorage.setItem('jwt_token', action.payload.token)
            return {
                loggedIn: true
            };
        }
        case LOGIN_FAIL: {
            return {
                loggedIn: false,
                error: action.payload
            }
        }
        case LOGIN: {
            return {
                loggedIn: true
            }
        }
        case LOGOUT: {
            return {
                loggedIn: false
            }
        }
        default: {
            return state
        }
    }
}

export default auth;