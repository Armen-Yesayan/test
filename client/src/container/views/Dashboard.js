import React from 'react';
import Menu from "../components/Menu";
import {Route} from "react-router-dom";
import Main from "./Main";
import CreateDatabase from "./CreateDatabase";

const Dashboard = () => {
    return (
        <div className='fluid-container'>
            <div className='row'>
                <div className='aside col-md-2 col-sm-3 sidebarMenu'>
                    <Menu />
                </div>
                <div className='main col-md-10'>
                    <div className='fluid-container'>
                        <Route exact path='/dashboard' component={Main} />
                        <Route exact path='/create-database' render={CreateDatabase} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;