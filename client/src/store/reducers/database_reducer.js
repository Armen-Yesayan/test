import {ALL_DATABASE, CREATE_DATABASE} from "../actions/types";

const initialState = {
    dbs: [],
    db: null,
}

const database = (state = initialState, action) => {
    switch (action.type) {
        case ALL_DATABASE: {
            return {
                dbs: state.dbs.concat([action.payload])
            }
        }
        case CREATE_DATABASE: {
            return {
                db: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default database;
