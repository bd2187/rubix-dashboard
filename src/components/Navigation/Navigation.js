import React, { useState } from "react";
import { App_context } from "../../contexts/app-context";
import Navigation_header from "./Navigation_header";
import Navigation_content from "./Navigation_content";
import { Navigation_div } from "./Navigation_styles";
import { NAVIGATION_PANELS } from "../../config/const";

function Navigation() {
    const [panel, change_panel] = useState(NAVIGATION_PANELS.LINKS);

    return (
        <App_context.Consumer>
            {function({ is_nav_open }) {
                return (
                    <Navigation_div is_nav_open={is_nav_open}>
                        <Navigation_header
                            panel={panel}
                            change_panel={change_panel}
                        />
                        <Navigation_content panel={panel} />
                    </Navigation_div>
                );
            }}
        </App_context.Consumer>
    );
}

export default Navigation;
