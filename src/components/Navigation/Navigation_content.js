import React from "react";
import { NAVIGATION_PANELS } from "../../config/const";
import Links_panel from "./panels/Links_panel";
import Social_panel from "./panels/Social_panel";
import Statistics_panel from "./panels/Statistics_panel";
import Feed_panel from "./panels/Feed_panel";
import Alerts_panel from "./panels/Alerts_panel";

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
