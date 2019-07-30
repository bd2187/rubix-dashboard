import styled from "styled-components";
import { Nav_transition, pixels_to_move } from "../common/styled-components";

export const Wrapper_div = styled(Nav_transition)`
    background: blue;
    position: relative;
    height: calc(100vh - 75px);
    left: ${({ is_nav_open }) => (is_nav_open ? pixels_to_move : "0")};
    margin-top: 75px;
    padding: 35px;
`;
