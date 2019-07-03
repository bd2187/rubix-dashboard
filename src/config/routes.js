import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
    return <h1>Home</h1>;
}

const routes = (
    <Router>
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Fragment>
    </Router>
);

export default routes;
