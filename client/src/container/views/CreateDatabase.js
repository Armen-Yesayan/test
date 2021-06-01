import React from 'react';
import Header from '../components/Header';
import DatabaseForm from "../components/database/DatabaseForm";

const CreateDatabase = () => {
    return (
        <div className='profileContainer'>
            <Header pageTitle={'Create Database'}/>
            <DatabaseForm />
        </div>
    );
};

export default CreateDatabase;