import React from 'react';
import Header from "../components/Header";
import Overview from "../components/Overview";

const Main = ({dbs}) => {
    return (
        <div>
            <Header pageTitle='Dashboard'/>
            <Overview dbsLength={dbs.length} />
        </div>
    );
};

export default Main;