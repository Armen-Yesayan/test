import React, {useState} from 'react';
import {Button, Card, Form, Input, Label} from "semantic-ui-react";

const DatabaseForm = ({onSubmit}) => {
    const [error, setError] = useState();
    const [name, setName] = useState('')

    const changeHandle = (e) => {
        setName(e.target.value);
    }

    const preSubmit = (e) => {
        if(!name) {
            setError('Required')
        }else if(name.length < 3) {
            setError('Min 3 characters')
        } else {
            setError('')
            onSubmit(name)
        }
    }

    return (
        <div className='container'>
            <div className='col-lg-4 mt-4'>
                <Form className="d-flex align-items-center justify-content-between">
                    <div className='form-group' style={{marginBottom: 0}}>
                        <Label>Name</Label>
                        <Input
                            name='name'
                            type='text'
                            onChange={changeHandle}
                        />
                        <span style={{color: 'red'}}>{error}</span>
                    </div>
                    <Button
                        className='btnPrimary'
                        type='button'
                        onClick={preSubmit}
                    >Submit</Button>
                </Form>


            </div>
        </div>
    );
};

export default DatabaseForm;
