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

    .links-category-toggle {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .links-category-toggle__text {
            display: inline;
        }

        .fa-chevron-left {
            transition: transform 0.2s ease-in-out;
        }

        .fa-chevron-left--open {
            transform: rotate(-90deg);
        }
    }

    .links-category-list__item {
        padding: 12px 0;
        color: ${main_font_color};
        cursor: pointer;

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

    .sub-links-container {
        border-left: 2px solid rgba(59, 70, 72, 0.5);
        overflow: hidden;
        font-size: 15px;

        .sub-links-container__link-content {
            display: flex;
            align-items: center;
        }

        .sub-links-container__pointer {
            width: 15px;
            height: 2px;
            margin-right: 15px;
            background: rgba(59, 70, 72, 0.5);
        }
    }

    .sub-links-container--open {
        animation: open-sublist 1s cubic-bezier(0.69, 1.67, 0, 0.81);
        margin: 10px 0;
        @keyframes open-sublist {
            0% {
                height: 0px;
            }

            50% {
                // todo
                height: auto;
            }
        }
    }

    .sub-links-container--closed {
        animation: close-sublist 1s cubic-bezier(0.69, 1.67, 0, 0.81);

        height: 0px;

        @keyframes close-sublist {
            0% {
                // todo
                height: auto;
            }

            50% {
                height: 0px;
            }
        }
    }
`;
