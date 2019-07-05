import React, { useState } from "react";
import Navigation_header from "./Navigation_header";
import Navigation_content from "./Navigation_content";
import { NAVIGATION_PANELS } from "../../config/const";

function Navigation() {
    const [panel, change_panel] = useState(NAVIGATION_PANELS.LINKS);

    return (
        <div className="navigation">
            <Navigation_header change_panel={change_panel} />
            <Navigation_content panel={panel} />
        </div>
    );
}

export default Navigation;
