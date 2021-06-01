import {DatabaseApi} from '../../Api'
import {ALL_DATABASE, CREATE_DATABASE} from "./types";

export const allDatabase = () => async dispatch => {
    const db = await DatabaseApi.allDatabase();

    dispatch({
        type: ALL_DATABASE,
        payload: db
    })

}

export const createDB = (name) => async dispatch => {
    const db = await DatabaseApi.createDB(name);

    dispatch({
        type: CREATE_DATABASE,
        payload: db
    })
}
