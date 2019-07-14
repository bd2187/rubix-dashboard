import styled from "styled-components";

const main_font_color = "#89949b";

export const Panels_container_div = styled.div`
    padding: 13px 25px;

    .links-panel__search {
        background: none;
        border: none;
        border-bottom: 0.5px solid #666;
        width: 100%;
        padding: 6px 10px;
        font-size: 14px;
        color: #fff;

        :focus {
            outline: none;
        }
    }
`;

export const Links_category_div = styled.div`
    padding: 1em 0;
    border-bottom: 1px solid #3b4648;

    .links-category__title {
        font-size: 13px;
        margin: 10px auto;
        color: rgba(137, 148, 155, 0.4);
    }

    .links-category-list__item {
        padding: 12px 0;
        color: ${main_font_color};
        a {
            color: ${main_font_color};
            text-decoration: none;
            display: block;
            width: 100%;
            height: 100%;
            padding: 12px 0;
            :visited: {
                color: ${main_font_color};
            }
        }
    }

    .links-category__icon {
        margin-right: 15px;
    }
`;
