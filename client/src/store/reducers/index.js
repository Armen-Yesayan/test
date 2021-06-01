import { combineReducers } from "redux";
import auth from "./auth_reducer";
import database from "./database_reducer";

export default combineReducers({
    auth,
    database,
});
