import React, {useState} from 'react';
import {Button, Form, Input, Label} from "semantic-ui-react";

let SignInForm = ({onSubmit}) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const changeHandle = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const preSubmit = () => {
        const valid = validate(form)

        if (!valid.password && !valid.email) {
            onSubmit(form)
        } else {
            setErrors(valid)
        }
    }

    return (
        <div>
            <Form onSubmit={preSubmit}>
                <div className='form-group'>
                    <Label>Email</Label>
                    <Input
                        placeholder='john@doe.com'
                        name='email'
                        type='email'
                        onChange={changeHandle}
                    />
                    <span style={{color: 'red'}}>{errors.email}</span>
                </div>
                <div className='form-group'>
                    <Label>Password</Label>
                    <Input
                        placeholder='********'
                        name='password'
                        type='password'
                        onChange={changeHandle}
                    />
                    <span style={{color: 'red'}}>{errors.password}</span>
                </div>

                <Button
                    className='btnCommon btnPrimary'
                    type='submit'>Submit</Button>
            </Form>
        </div>
    );
};

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email Address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 5) {
        errors.password = 'Minimum 5 characters';
    }

    return errors;
}

export default SignInForm;