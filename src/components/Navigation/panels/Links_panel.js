import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Panels_container_div, Links_category_div } from "./Panels_styles.js";

function Links_panel() {
    const [is_mailbox_expanded, toggle_mailbox] = useState(false);
    const [is_blog_expanded, toggle_blog] = useState(false);
    const [is_charts_expanded, toggle_charts] = useState(false);
    const [is_rubix_charts_expanded, toggle_rubix_charts] = useState(false);
    const [is_ui_elements_expanded, toggle_ui_elements] = useState(false);
    const [is_forms_expanded, toggle_forms] = useState(false);
    const [is_tables_expanded, toggle_tables] = useState(false);
    const [is_file_utilities_expanded, toggle_file_utilities] = useState(false);

    function expand_list(is_expanded, toggle_sublist) {
        toggle_sublist(!is_expanded);
    }

    return (
        <Panels_container_div className="links-panel">
            <input
                className="links-panel__search"
                type="text"
                placeholder="Search..."
            />

            <Links_category_div className="links-category">
                <h4 className="links-category__title">PAGES</h4>
                <ul className="links-category-list">
                    <li className="links-category-list__item">
                        <Link to="/">
                            <i className="fas fa-tachometer-alt links-category__icon" />
                            Dashboard
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <div
                            onClick={() =>
                                expand_list(is_mailbox_expanded, toggle_mailbox)
                            }
                            className="links-category-toggle"
                        >
                            <div className="links-category-toggle__inner-container">
                                <i className="fas fa-envelope links-category__icon" />
                                <p className="links-category-toggle__text">
                                    Mailbox
                                </p>
                            </div>
                            <i
                                className={`fas fa-chevron-left ${
                                    is_mailbox_expanded
                                        ? "fa-chevron-left--open"
                                        : ""
                                } `}
                            />
                        </div>
                        <ul
                            className={`sub-links-container ${
                                is_mailbox_expanded
                                    ? "sub-links-container--open"
                                    : "sub-links-container--closed"
                            }`}
                        >
                            <li className="links-category-list__item">
                                <Link to="/mailbox/inbox">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-inbox links-category__icon" />
                                        Inbox
                                    </div>
                                </Link>
                            </li>
                            <li className="links-category-list__item">
                                <Link to="/mailbox/mail">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-envelope-open-text links-category__icon" />
                                        Mail
                                    </div>
                                </Link>
                            </li>
                            <li className="links-category-list__item">
                                <Link to="/mailbox/compose">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-comment-alt links-category__icon" />
                                        Compose
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/gallery">
                            <i className="fas fa-images links-category__icon" />
                            Gallery
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/social">
                            <i className="fas fa-share-alt links-category__icon" />
                            Social
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <div
                            onClick={() =>
                                expand_list(is_blog_expanded, toggle_blog)
                            }
                            className="links-category-toggle"
                        >
                            <div className="links-category-toggle__inner-container">
                                <i className="fas fa-th links-category__icon" />
                                <p className="links-category-toggle__text">
                                    Blog
                                </p>
                            </div>
                            <i
                                className={`fas fa-chevron-left ${
                                    is_blog_expanded
                                        ? "fa-chevron-left--open"
                                        : ""
                                } `}
                            />
                        </div>

                        <ul
                            className={`sub-links-container ${
                                is_blog_expanded
                                    ? "sub-links-container--open"
                                    : "sub-links-container--closed"
                            }`}
                        >
                            <li className="links-category-list__item">
                                <Link to="/blog/posts">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-clipboard-list links-category__icon" />
                                        Posts
                                    </div>
                                </Link>
                            </li>
                            <li className="links-category-list__item">
                                <Link to="/blog/post">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-sticky-note links-category__icon" />
                                        Single Post
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Links_category_div>

            <Links_category_div className="links-category">
                <h4 className="links-category__title">COMPONENTS</h4>
                <ul className="links-category-list">
                    <li className="links-category-list__item">
                        <Link to="/panels">
                            <i className="fas fa-layer-group links-category__icon" />
                            Panels
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <div
                            onClick={() =>
                                expand_list(is_charts_expanded, toggle_charts)
                            }
                            className="links-category-toggle"
                        >
                            <div className="links-category-toggle__inner-container">
                                <i className="fas fa-chart-bar links-category__icon" />
                                <p className="links-category-toggle__text">
                                    Charts
                                </p>
                            </div>
                            <i
                                className={`fas fa-chevron-left ${
                                    is_charts_expanded
                                        ? "fa-chevron-left--open"
                                        : ""
                                } `}
                            />
                        </div>

                        <ul
                            className={`sub-links-container ${
                                is_charts_expanded
                                    ? "sub-links-container--open"
                                    : "sub-links-container--closed"
                            }`}
                        >
                            <li className="links-category-list__item">
                                <div
                                    onClick={() =>
                                        expand_list(
                                            is_rubix_charts_expanded,
                                            toggle_rubix_charts
                                        )
                                    }
                                    className="links-category-toggle"
                                >
                                    <div
                                        className="links-category-toggle__inner-container"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-chart-bar links-category__icon" />
                                        <p className="links-category-toggle__text">
                                            Rubix Charts
                                        </p>
                                    </div>
                                    <i
                                        className={`fas fa-chevron-left ${
                                            is_rubix_charts_expanded
                                                ? "fa-chevron-left--open"
                                                : ""
                                        } `}
                                    />
                                </div>
                                <ul
                                    className={`sub-links-container ${
                                        is_rubix_charts_expanded
                                            ? "sub-links-container--open"
                                            : "sub-links-container--closed"
                                    }`}
                                    style={{ marginLeft: "20px" }}
                                >
                                    <li className="links-category-list__item">
                                        <Link to="/charts/rubix/line">
                                            <div className="sub-links-container__link-content">
                                                <div className="sub-links-container__pointer" />
                                                <i className="fas fa-clipboard-list links-category__icon" />
                                                Line Series
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/charts/rubix/area">
                                            <div className="sub-links-container__link-content">
                                                <div className="sub-links-container__pointer" />
                                                <i className="fas fa-clipboard-list links-category__icon" />
                                                Area Series
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/charts/rubix/barcol">
                                            <div className="sub-links-container__link-content">
                                                <div className="sub-links-container__pointer" />
                                                <i className="fas fa-clipboard-list links-category__icon" />
                                                Bar + Column Series
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/charts/rubix/mixed">
                                            <div className="sub-links-container__link-content">
                                                <div className="sub-links-container__pointer" />
                                                <i className="fas fa-clipboard-list links-category__icon" />
                                                Mixed Series
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/charts/rubix/piedonut">
                                            <div className="sub-links-container__link-content">
                                                <div className="sub-links-container__pointer" />
                                                <i className="fas fa-clipboard-list links-category__icon" />
                                                Pie + Donut Series
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="links-category-list__item">
                                <Link to="/charts/chartsjs">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-clipboard-list links-category__icon" />
                                        Charts.JS
                                    </div>
                                </Link>
                            </li>

                            <li className="links-category-list__item">
                                <Link to="/charts/c3js">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-clipboard-list links-category__icon" />
                                        C3.JS
                                    </div>
                                </Link>
                            </li>

                            <li className="links-category-list__item">
                                <Link to="/charts/morrisjs">
                                    <div className="sub-links-container__link-content">
                                        <div className="sub-links-container__pointer" />
                                        <i className="fas fa-clipboard-list links-category__icon" />
                                        Morris.JS
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/timeline">
                            <i className="far fa-clock links-category__icon" />
                            Static Timeline
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/interactive-timeline">
                            <i className="fas fa-history links-category__icon" />
                            Interactive Timeline
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/codemirror">
                            <i className="fas fa-code links-category__icon" />
                            Codemirror
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/maps">
                            <i className="fas fa-map-marker-alt links-category__icon" />
                            Maps
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/editor">
                            <i className="fas fa-edit links-category__icon" />
                            Editor
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <p
                            onClick={() =>
                                expand_list(
                                    is_ui_elements_expanded,
                                    toggle_ui_elements
                                )
                            }
                        >
                            <i className="fas fa-toggle-on links-category__icon" />
                            UI Elements
                        </p>
                        <ul>
                            {is_ui_elements_expanded ? (
                                <>
                                    <li className="links-category-list__item">
                                        <Link to="/ui-elements/buttons">
                                            Inbox
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/ui-elements/dropdowns">
                                            Mail
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/ui-elements/tabs-and-navs">
                                            Tabs & Navs
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/ui-elements/sliders">
                                            Sliders
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/ui-elements/knobs">
                                            Knobs
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/ui-elements/modals">
                                            Modals
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/ui-elements/messenger">
                                            Messenger
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li className="links-category-list__item">
                        <p
                            onClick={() =>
                                expand_list(is_forms_expanded, toggle_forms)
                            }
                        >
                            <i className="fas fa-align-left links-category__icon" />
                            Forms
                        </p>
                        <ul>
                            {is_forms_expanded ? (
                                <>
                                    <li className="links-category-list__item">
                                        <Link to="/forms/controls">
                                            Controls
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/forms/x-editables">
                                            Mail
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/forms/wizard">Wizard</Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li className="links-category-list__item">
                        <p
                            onClick={() =>
                                expand_list(is_tables_expanded, toggle_tables)
                            }
                        >
                            <i className="fas fa-table links-category__icon" />
                            Tables
                        </p>
                        <ul>
                            {is_tables_expanded ? (
                                <>
                                    <li className="links-category-list__item">
                                        <Link to="/tables/bootstrap-tables">
                                            Bootstrap Tables
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/tables/datatables">
                                            Datatables
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/tables/tablesaw">
                                            Tablesaw
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/grid">
                            <i className="fas fa-border-all links-category__icon" />
                            Grid
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/calendar">
                            <i className="fas fa-calendar-alt links-category__icon" />
                            Calendar
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <p
                            onClick={() =>
                                expand_list(
                                    is_file_utilities_expanded,
                                    toggle_file_utilities
                                )
                            }
                        >
                            <i className="fas fa-folder-open links-category__icon" />
                            File Utilities
                        </p>
                        <ul>
                            {is_file_utilities_expanded ? (
                                <>
                                    <li className="links-category-list__item">
                                        <Link to="/file-utilities/dropzone">
                                            Bootstrap Tables
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/file-utilities/image-cropping">
                                            Image Cropping
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/fonts">
                            <i className="fas fa-font links-category__icon" />
                            Fonts
                        </Link>
                    </li>
                </ul>
            </Links_category_div>
        </Panels_container_div>
    );
}
<<<<<<< HEAD
// testing 123
=======
// testing
>>>>>>> 87ee0de8bfa1d6699369cefd6801242a84b4fcb2
export default Links_panel;
