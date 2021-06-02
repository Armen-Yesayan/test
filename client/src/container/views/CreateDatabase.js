import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from '../components/Header';
import DatabaseForm from "../components/database/DatabaseForm";
import {createDB} from "../../store/actions";
import DatabaseTable from "../components/database/DatabaseTable";
import {useHistory} from "react-router-dom";

const CreateDatabase = ({dbs, dispatch}) => {
    const db = useSelector(state => state.database.db);
    const history = useHistory();

    const onSubmit = (value) => {
        dispatch(createDB(value));
        history.push(`/database/${db.id}`)
    }

    return (
        <div className='profileContainer'>
            <Header pageTitle={'Create Database'}/>
            <DatabaseForm onSubmit={onSubmit}/>
            <DatabaseTable dbs={dbs} />
        </div>
    );
};

export default CreateDatabase;
