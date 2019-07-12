import styled from "styled-components";
import {
    Nav_transition,
    pixels_to_move,
    flex_center_all
} from "../common/styled-components";

const square_dimension = `
    width: 79px;
    height: 75px;
`;

export const Head = styled(Nav_transition)`
    background-color: #273135;
    position: fixed;
    top: 0;
    left: ${({ is_nav_open }) => (is_nav_open ? pixels_to_move : "0")}
    height: 75px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
`;

export const Header_flanks = styled.div`
    ${square_dimension}
    ${flex_center_all}
    cursor: pointer;
`;

export const Hamburger_menu_div = styled(Header_flanks)`
    background: #48a38b;
    :hover {
        background-color: #50b498;
    }

    .hamburger-lines {
        width: 30px;
    }

    .hamburger-lines__line {
        width: 100%;
        height: 4px;
        margin: 4px 0;
        background-color: #fff;
    }
`;

export const Power = styled(Header_flanks)`
    background: #f25d50;
    :hover {
        background-color: #ef644c;
    }

    font-size: 32px;
`;
