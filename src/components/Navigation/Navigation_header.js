import React from "react";
import { NAVIGATION_PANELS } from "../../config/const";
import { Link } from "react-router-dom";
import {
    Navigation_header_div,
    Navigation_panels_menu_ul
} from "./Navigation_styles";

function Navigation_panels_menu({ panel, change_panel }) {
    const { LINKS, SOCIAL, STATISTICS, FEED, ALERTS } = NAVIGATION_PANELS;

    return (
        <Navigation_panels_menu_ul>
            <li
                className={`navigation-panel-option ${
                    panel === LINKS ? "navigation-panel-option--selected" : ""
                }`}
                onClick={() => change_panel(LINKS)}
            >
                <i className="fas fa-link" />
            </li>
            <li
                className={`navigation-panel-option ${
                    panel === SOCIAL ? "navigation-panel-option--selected" : ""
                }`}
                onClick={() => change_panel(SOCIAL)}
            >
                <i className="fas fa-comments" />
            </li>
            <li
                className={`navigation-panel-option ${
                    panel === STATISTICS
                        ? "navigation-panel-option--selected"
                        : ""
                }`}
                onClick={() => change_panel(STATISTICS)}
            >
                <i className="fas fa-chart-pie" />
            </li>
            <li
                className={`navigation-panel-option ${
                    panel === FEED ? "navigation-panel-option--selected" : ""
                }`}
                onClick={() => change_panel(FEED)}
            >
                <i className="fas fa-list" />
            </li>
            <li
                className={`navigation-panel-option ${
                    panel === ALERTS ? "navigation-panel-option--selected" : ""
                }`}
                onClick={() => change_panel(ALERTS)}
            >
                <i className="fas fa-bell" />
            </li>
        </Navigation_panels_menu_ul>
    );
}

function Navigation_header({ panel, change_panel }) {
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
                    <i className="fas fa-lock navigation-profile-container__lock" />
                </Link>
            </div>
            <Navigation_panels_menu panel={panel} change_panel={change_panel} />
        </Navigation_header_div>
    );
}

export default Navigation_header;
