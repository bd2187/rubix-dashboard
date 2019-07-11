import styled from "styled-components";
import { Nav_transition, pixels_to_move } from "../common/styled-components";

export const Wrapper_div = styled(Nav_transition)`
    background: orange;
    position: relative;
    left: ${({ is_nav_open }) => (is_nav_open ? pixels_to_move : "0")};
    margin-top: 75px;
`;
