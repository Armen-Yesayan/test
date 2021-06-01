import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from '../components/Header';
import DatabaseForm from "../components/database/DatabaseForm";
import {allDatabase, createDB} from "../../store/actions";

const CreateDatabase = () => {
    const dispatch = useDispatch();

    const dbs = useSelector(state => state.database.dbs)

    console.log(dbs)

    useEffect(() => {
        dispatch(allDatabase())
    }, [])

    const onSubmit = (value) => {
        dispatch(createDB(value));
    }

    return (
        <div className='profileContainer'>
            <Header pageTitle={'Create Database'}/>
            <DatabaseForm onSubmit={onSubmit}/>
        </div>
    );
};

export default CreateDatabase;
