import React from "react";
import styled from "styled-components";

const Head = styled.div`
    background-color: blue;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        <Head>
            <Hamburger_menu />
            <h1>rubix</h1>
            <Power />
        </Head>
    );
}

export default Header;
