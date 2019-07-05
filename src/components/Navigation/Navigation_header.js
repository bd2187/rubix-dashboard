import React from "react";
import { NAVIGATION_PANELS } from "../../config/const";
import { Link } from "react-router-dom";
function Navigation_panels_menu({ change_panel }) {
    return (
        <ul className="navigation-panels-menu">
            <li onClick={() => change_panel(NAVIGATION_PANELS.LINKS)}>links</li>
            <li onClick={() => change_panel(NAVIGATION_PANELS.SOCIAL)}>
                social
            </li>
            <li onClick={() => change_panel(NAVIGATION_PANELS.STATISTICS)}>
                statistics
            </li>
            <li onClick={() => change_panel(NAVIGATION_PANELS.FEED)}>feed</li>
            <li onClick={() => change_panel(NAVIGATION_PANELS.ALERTS)}>
                alerts
            </li>
        </ul>
    );
}

function Navigation_header({ change_panel }) {
    return (
        <div className="navigation-header">
            <div className="navigation-header__profile">
                <div className="navigation-header__profile-picture" />
                <div className="navigation-header__profile-info">
                    <h1>Obi Wan</h1>
                    <div className="navigation-header__status-bar" />
                </div>
                <Link to="/lock">Lock</Link>
            </div>
            <Navigation_panels_menu change_panel={change_panel} />
        </div>
    );
}

export default Navigation_header;
