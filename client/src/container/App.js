import {Route, Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import SignIn from "./views/SignIn";
import {useEffect} from "react";
import {logIn} from "../store/actions";
import Dashboard from "./views/Dashboard";
import {privetRoute} from "../routes";

const App = () => {
    const loggedIn = useSelector(state => state.auth.loggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('jwt_token')) {
            dispatch(logIn());
        }
    }, [])

    const PublicRoute = ({ component: Component, authed, ...rest }) => {
        console.log('asd')
        return (
            <Route
                {...rest}
                render={props => authed === false
                    ? <Component {...props} />
                    : <Redirect to='/dashboard' />}
            />
        );
    }

    const ProtectedRoute = ({ component: Component, authed, ...rest }) => {
        return (
            <Route
                {...rest}
                render={props => authed === true
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/', state: { from: props.location }}} />}
            />
        );
    }

    return (
        <div>
            {!loggedIn && <PublicRoute
                authed={loggedIn} path='/' component={SignIn}/>
            }
            {
                loggedIn && privetRoute.map((value, index) => {
                    return <ProtectedRoute authed={loggedIn} path={value.path} component={Dashboard} key={index}/>
                })
            }
        </div>
    );
};

export default App;
