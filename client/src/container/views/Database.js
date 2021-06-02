import React from 'react';
import Header from "../components/Header";
import {useParams} from 'react-router-dom'
import DatabaseMenu from "../components/database/DatabaseMenu";

const Database = ({dbs}) => {
    let {id} = useParams();
    const db = dbs.find(item => item.id == id)

    return (
        <div className='profileContainer'>
            <Header pageTitle={`Database - ${db.name}`}/>
            <DatabaseMenu />
        </div>
    );
};

export default Database;