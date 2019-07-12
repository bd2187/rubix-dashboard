import styled from "styled-components";
import { Nav_transition, pixels_to_move } from "../common/styled-components";

const nav_header_font_color = `rgba(0, 0, 0, 0.2)`;

export const Navigation_div = styled(Nav_transition)`
    position: fixed;
    top: 0;
    left: ${({ is_nav_open }) => {
        return is_nav_open ? "0" : `-${pixels_to_move}`;
    }};
    width: ${pixels_to_move};
    height: 100%;
    background-color: #273135;
    color: rgba(125, 136, 142, 0.7);
    overflow-y: scroll;
`;

export const Navigation_header_div = styled.div`
    .navigation-profile-container {
        color: #fff;
        background: #fa7252;
        padding: 17px 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navigation-profile-container__profile-photo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: magenta;
    }

    .navigation-profile-container__lock {
        color: ${nav_header_font_color};
    }

    .profile-info {
        color: #fff;
        .profile-content {
            width: 120px;
            .profile-content__progress {
                height: 100%;
                width: 25%;
                background-color: #fff;
            }

            h1 {
                font-size: 15px;
                margin: 3px 0;
            }
        }
    }

    .profile-progress-bar {
        width: 100%;
        background: rgba(0, 0, 0, 0.2);
        height: 4px;
    }

    .profile-progress-bar__progress {
        width: 25%;
        height: 100%;
        background: #fff;
    }
`;

export const Navigation_panels_menu_ul = styled.ul`
    display: flex;

    .navigation-panel-option {
        width: 20%;
        background: #e36049;
        text-align: center;
        padding: 10px 0;
        border-right: 0.5px solid ${nav_header_font_color};
        color: ${nav_header_font_color};
        cursor: pointer;
        font-size: 14px;
        :hover {
            background: #cc5641;
        }
    }

    .navigation-panel-option--selected,
    .navigation-panel-option--selected:hover {
        background-color: #b84d3b;
    }
`;
