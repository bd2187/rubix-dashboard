import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Navigation() {
    return <p>Navigation</p>;
}

function Dashboard() {
    return <h1>Dashboard</h1>;
}

function Mailbox() {
    return <h1>Mailbox</h1>;
}

function Gallery() {
    return <h1>Gallery</h1>;
}

function Social() {
    return <h1>Social</h1>;
}

function Blog() {
    return <h1>Blog</h1>;
}

function Panels() {
    return <h1>Panels</h1>;
}

const routes = (
    <Router>
        <>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/mailbox/:section" component={Mailbox} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/social" component={Social} />
                <Route exact path="/blog/:section" component={Blog} />
                <Route exact path="/blog/:section" component={Panels} />
                {/* Todo add 404 page */}
            </Switch>
        </>
    </Router>
);

export default routes;
