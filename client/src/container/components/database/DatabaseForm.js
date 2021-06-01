import React, {useState} from 'react';
import {Button, Form, Input, Label} from "semantic-ui-react";

const DatabaseForm = () => {
    const [error, setError] = useState();

    const changeHandle = () => {

    }

    return (
        <div className='container'>
            <div className='col-lg-6 col-md-6 col-sm-3 mx-auto'>
                <Form>
                    <div className='form-group'>
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
                        type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default DatabaseForm;