import React, {useEffect} from 'react';
import Menu from "../components/Menu";
import {Route} from "react-router-dom";
import Main from "./Main";
import CreateDatabase from "./CreateDatabase";
import {useDispatch, useSelector} from "react-redux";
import {allDatabase} from "../../store/actions";
import Database from "./Database";

const Dashboard = () => {
    const dispatch = useDispatch();
    const dbs = useSelector(state => state.database.dbs);

    useEffect(() => {
        dispatch(allDatabase())
    }, [])

    return (
        <div className='fluid-container'>
            <div className='row'>
                <div className='aside col-md-2 col-sm-3 sidebarMenu'>
                    <Menu />
                </div>
                <div className='main col-md-10'>
                    <div className='fluid-container'>
                        <Route exact path='/dashboard' >
                            <Main dbs={dbs} />
                        </Route>
                        <Route exact path='/create-database' >
                            <CreateDatabase dbs={dbs} dispatch={dispatch}/>
                        </Route>
                        <Route exact path='/database/:id'>
                            <Database dbs={dbs} />
                        </Route>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
