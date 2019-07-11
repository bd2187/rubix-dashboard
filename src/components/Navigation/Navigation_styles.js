import styled from "styled-components";
import { Nav_transition, pixels_to_move } from "../common/styled-components";

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
    background: #f25d50;

    .navigation-profile-container {
        color: #fff;
        background: green;
        padding: 25px 25px;
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
                font-size: 17px;
                margin: 3px 0;
            }
        }
    }

    .profile-progress-bar {
        width: 100%;
        background: red;
        height: 3px;
    }

    .profile-progress-bar__progress {
        width: 25%;
        height: 100%;
        background: #fff;
    }
`;
