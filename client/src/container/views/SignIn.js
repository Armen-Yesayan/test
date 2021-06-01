import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import {Card,Divider} from 'semantic-ui-react'
import SignInForm from "../components/SignInForm";
import {signIn} from "../../store/actions";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


const SignIn = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    if(props.loggedIn) {
        history.push('/dashboard');
    }

    const renderError = () => {
        if (error !== '') {
            return <p className='error text-center'>{error}</p>;
        }
    }

    const onSubmit = (values) => {
        setLoading(true);
        dispatch(signIn(values));
        history.push('/dashboard');
    }

    return (
        <div className='welcomeContainer'>
            <div className='container mainContainer'>
                <NavBar />
                <div className='authForm'>
                    <Card centered className='vCard'>
                        <h1>Sign In</h1>
                        <Divider />
                        {renderError()}
                        <SignInForm onSubmit={onSubmit} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
