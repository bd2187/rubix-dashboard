import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Wrapper from "../components/Wrapper/Wrapper";
import Mailbox from "../components/Mailbox/Mailbox";

function Dashboard() {
    return <h1>Dashboard</h1>;
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

function Charts() {
    return <h1>Charts</h1>;
}

function Timeline() {
    return <h1>Timeline</h1>;
}

function InteractiveTimeline() {
    return <h1>Interactive Timeline</h1>;
}

function CodeMirror() {
    return <h1>Code Mirror</h1>;
}

function Editor() {
    return <h1>Editor</h1>;
}

function UIelements() {
    return <h1>UIelements</h1>;
}

function Forms() {
    return <h1>Forms</h1>;
}

function Tables() {
    return <h1>Tables</h1>;
}

function Grid() {
    return <h1>Grid</h1>;
}

function Calendar() {
    return <h1>Calednar</h1>;
}

function FileUtilities() {
    return <h1>FileUtilities</h1>;
}

function Fonts() {
    return <h1>Fonts</h1>;
}

function Login() {
    return <h1>Login</h1>;
}

function Signup() {
    return <h1>Signup</h1>;
}

function Lock() {
    return <h1>Lock</h1>;
}

function Invoice() {
    return <h1>Invoice</h1>;
}

function Pricing() {
    return <h1>Pricing</h1>;
}

const routes = (
    <Router>
        <>
            <Header />
            <Navigation />
            <Wrapper>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/mailbox/:section" component={Mailbox} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/social" component={Social} />
                    <Route exact path="/blog/:section" component={Blog} />
                    <Route exact path="/blog/:section" component={Panels} />
                    <Route exact path="/charts/:section" component={Charts} />
                    <Route
                        exact
                        path="/charts/rubix/:section"
                        component={Charts}
                    />
                    <Route exact path="/timeline" component={Timeline} />
                    <Route
                        exact
                        path="/interactive-timeline"
                        component={InteractiveTimeline}
                    />
                    <Route exact path="/codemirror" component={CodeMirror} />
                    <Route exact path="/editor" component={Editor} />
                    <Route
                        exact
                        path="/ui-elements/:section"
                        component={UIelements}
                    />
                    <Route exact path="/forms/:section" component={Forms} />
                    <Route exact path="/tables/:section" component={Tables} />
                    <Route exact path="/grid" component={Grid} />
                    <Route exact path="/calendar" component={Calendar} />
                    <Route
                        exact
                        path="/file-utilities/:section"
                        component={FileUtilities}
                    />
                    <Route exact path="/fonts" component={Fonts} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/lock" component={Lock} />
                    <Route exact path="/invoice" component={Invoice} />
                    <Route exact path="/pricing" component={Pricing} />

                    {/* Todo add 404 page */}
                </Switch>
            </Wrapper>
        </>
    </Router>
);

export default routes;
