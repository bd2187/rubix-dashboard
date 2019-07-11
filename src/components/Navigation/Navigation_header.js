import React from "react";
import { NAVIGATION_PANELS } from "../../config/const";
import { Link } from "react-router-dom";
import { Navigation_header_div } from "./Navigation_styles";

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
        <Navigation_header_div>
            <div className="navigation-profile-container">
                <div className="navigation-profile-container__profile-photo" />
                <div className="profile-info">
                    <div className="profile-content">
                        <h1>Obi Wan</h1>
                        <div className="profile-progress-bar">
                            <div className="profile-progress-bar__progress" />
                        </div>
                    </div>
                </div>
                <Link to="/lock">
                    <i className="fas fa-lock" />
                </Link>
            </div>
            <Navigation_panels_menu change_panel={change_panel} />
        </Navigation_header_div>
    );
}

export default Navigation_header;
