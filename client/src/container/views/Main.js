import React from 'react';
import Header from "../components/Header";
import Overview from "../components/Overview";

const Main = () => {
    return (
        <div>
            <Header pageTitle='Dashboard'/>
            <Overview />
        </div>
    );
};

export default Main;