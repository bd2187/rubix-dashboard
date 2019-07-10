import React from "react";
import { App_context } from "../../contexts/app-context";
import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const Head = styled.div`
    background-color: blue;
    position: fixed;
    top: 0;
    left: ${({ is_nav_open }) => (is_nav_open ? "200px" : "0")}
    height: 75px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    transition: left 0.5s ease-in-out;
`;

const Hamburger_menu = styled.div`
    width: 79px;
    height: 75px;
    background: gold;
`;

const Power = styled.div`
    width: 79px;
    height: 75px;
    background: gold;
`;

function Header() {
    return (
        <App_context.Consumer>
            {function({ is_nav_open, toggle_nav }) {
                return (
                    <>
                        <Head is_nav_open={is_nav_open}>
                            <Hamburger_menu onClick={toggle_nav} />
                            <h1>rubix</h1>
                            <Power />
                        </Head>
                        <Navigation />
                    </>
                );
            }}
        </App_context.Consumer>
    );
}

export default Header;
