import React from "react";
import styled from "styled-components";
import { App_context } from "../../contexts/app-context";

const Wrapper_div = styled.div`
    background: orange;
    position: relative;
    left: ${({ is_nav_open }) => (is_nav_open ? "200px" : "0")};
    transition: left 0.5s ease-in-out;
    margin-top: 75px;
`;

function Wrapper(props) {
    return (
        <App_context.Consumer>
            {function({ is_nav_open }) {
                return (
                    <Wrapper_div is_nav_open={is_nav_open}>
                        {props.children}
                    </Wrapper_div>
                );
            }}
        </App_context.Consumer>
    );
}

export default Wrapper;
