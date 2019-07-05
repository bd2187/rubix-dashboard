import React from "react";
import { NAVIGATION_PANELS } from "../../config/const";
function Links_panel() {
    return <h1>links</h1>;
}

function Social_panel() {
    return <h1>social</h1>;
}

function Statistics_panel() {
    return <h1>stats</h1>;
}

function Feed_panel() {
    return <h1>Feed</h1>;
}

function Alerts_panel() {
    return <h1>Alerts</h1>;
}

function Navigation_content({ panel }) {
    var content = "";

    switch (panel) {
        case NAVIGATION_PANELS.LINKS:
            content = <Links_panel />;
            break;
        case NAVIGATION_PANELS.SOCIAL:
            content = <Social_panel />;
            break;
        case NAVIGATION_PANELS.STATISTICS:
            content = <Statistics_panel />;
            break;
        case NAVIGATION_PANELS.FEED:
            content = <Feed_panel />;
            break;
        case NAVIGATION_PANELS.ALERTS:
            content = <Alerts_panel />;
            break;
    }

    return <div className="navigation-content">{content}</div>;
}

export default Navigation_content;
