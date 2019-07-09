import React, { useState } from "react";
import styled from "styled-components";
import Navigation_header from "./Navigation_header";
import Navigation_content from "./Navigation_content";
import { NAVIGATION_PANELS } from "../../config/const";

const Div = styled.div`
    background-color: red;
`;

function Navigation() {
    const [panel, change_panel] = useState(NAVIGATION_PANELS.LINKS);

    return (
        <Div>
            <Navigation_header change_panel={change_panel} />
            <Navigation_content panel={panel} />
        </Div>
    );
}

export default Navigation;
