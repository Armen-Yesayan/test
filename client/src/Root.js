import React, {useEffect} from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";
import { createBrowserHistory }  from 'history';
import {Provider} from "react-redux";

import store from "./store";
import App from "./container/App";

const history = createBrowserHistory ();

const Root = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    )
}

export default Root;