import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Navigation() {
    return <p>Navigation</p>;
}

function Dashboard() {
    return <h1>Dashboard</h1>;
}

const routes = (
    <Router>
        <>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        </>
    </Router>
);

export default routes;
