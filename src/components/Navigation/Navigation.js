import React, { useState } from "react";
import styled from "styled-components";
import { App_context } from "../../contexts/app-context";
import Navigation_header from "./Navigation_header";
import Navigation_content from "./Navigation_content";
import { NAVIGATION_PANELS } from "../../config/const";

const Navigation_div = styled.div`
    position: fixed;
    top: 0;
    left: ${({ is_nav_open }) => {
        return is_nav_open ? "0" : "-200px";
    }};
    width: 200px;
    background-color: red;

    transition: left 0.5s ease-in-out;
`;

function Navigation() {
    const [panel, change_panel] = useState(NAVIGATION_PANELS.LINKS);
    return (
        <App_context.Consumer>
            {function({ is_nav_open }) {
                return (
                    <Navigation_div is_nav_open={is_nav_open}>
                        <Navigation_header change_panel={change_panel} />
                        <Navigation_content panel={panel} />
                    </Navigation_div>
                );
            }}
        </App_context.Consumer>
    );
}

export default Navigation;
