import React from "react";
import { App_context } from "../../contexts/app-context";
import Navigation from "../Navigation/Navigation";
import { Head, Hamburger_menu_div, Power } from "./Header_styles";

function Header() {
    return (
        <App_context.Consumer>
            {function({ is_nav_open, toggle_nav }) {
                return (
                    <>
                        <Head is_nav_open={is_nav_open}>
                            <Hamburger_menu_div onClick={toggle_nav}>
                                <div className="hamburger-lines">
                                    <div className="hamburger-lines__line" />
                                    <div className="hamburger-lines__line" />
                                    <div className="hamburger-lines__line" />
                                    <div className="hamburger-lines__line" />
                                </div>
                            </Hamburger_menu_div>
                            <h1>rubix</h1>
                            <Power>
                                <i className="fas fa-power-off" />
                            </Power>
                        </Head>
                        <Navigation />
                    </>
                );
            }}
        </App_context.Consumer>
    );
}

export default Header;
