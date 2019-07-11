import React from "react";
import { App_context } from "../../contexts/app-context";
import { Wrapper_div } from "./Wrapper_styles";

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
