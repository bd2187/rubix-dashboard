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
                        <p
                            onClick={() =>
                                expand_list(is_mailbox_expanded, toggle_mailbox)
                            }
                        >
                            <i className="fas fa-envelope links-category__icon" />
                            Mailbox
                        </p>
                        <ul>
                            {is_mailbox_expanded ? (
                                <>
                                    <li className="links-category-list__item">
                                        <Link to="/mailbox/inbox">Inbox</Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/mailbox/mail">Mail</Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/mailbox/compose">
                                            Compose
                                        </Link>
                                    </li>
                                </>
                            ) : null}
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
                        <p
                            onClick={() =>
                                expand_list(is_blog_expanded, toggle_blog)
                            }
                        >
                            Blog
                        </p>
                        <ul>
                            {is_blog_expanded ? (
                                <>
                                    <li className="links-category-list__item">
                                        <Link to="/blog/posts">Posts</Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/blog/post">Single Post</Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                </ul>
            </Links_category_div>

            <Links_category_div className="links-category">
                <h4 className="links-category__title">COMPONENTS</h4>
                <ul className="links-category-list">
                    <li className="links-category-list__item">
                        <Link to="/panels">Panels</Link>
                    </li>
                    <li className="links-category-list__item">
                        <p
                            onClick={() =>
                                expand_list(is_charts_expanded, toggle_charts)
                            }
                        >
                            Charts
                        </p>
                        <ul>
                            {is_charts_expanded ? (
                                <>
                                    <li className="links-category-list__item">
                                        <p
                                            onClick={() =>
                                                expand_list(
                                                    is_rubix_charts_expanded,
                                                    toggle_rubix_charts
                                                )
                                            }
                                        >
                                            Rubix Charts
                                        </p>
                                        <ul>
                                            {is_rubix_charts_expanded ? (
                                                <>
                                                    <li className="links-category-list__item">
                                                        <Link to="/charts/rubix/line">
                                                            Line Series
                                                        </Link>
                                                    </li>
                                                    <li className="links-category-list__item">
                                                        <Link to="/charts/rubix/area">
                                                            Area Series
                                                        </Link>
                                                    </li>
                                                    <li className="links-category-list__item">
                                                        <Link to="/charts/rubix/barcol">
                                                            Bar + Column Series
                                                        </Link>
                                                    </li>
                                                    <li className="links-category-list__item">
                                                        <Link to="/charts/rubix/mixed">
                                                            Mixed Series
                                                        </Link>
                                                    </li>
                                                    <li className="links-category-list__item">
                                                        <Link to="/charts/rubix/piedonut">
                                                            Pie + Donut Series
                                                        </Link>
                                                    </li>
                                                </>
                                            ) : null}
                                        </ul>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/charts/chartsjs">
                                            Charts.JS
                                        </Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/charts/c3js">C3.JS</Link>
                                    </li>
                                    <li className="links-category-list__item">
                                        <Link to="/charts/morrisjs">
                                            Morris.JS
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/timeline">Static Timeline</Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/interactive-timeline">
                            Interactive Timeline
                        </Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/codemirror">Codemirror</Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/maps">Maps</Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/editor">Editor</Link>
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
                        <Link to="/grid">Grid</Link>
                    </li>
                    <li className="links-category-list__item">
                        <Link to="/calendar">Calendar</Link>
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
                        <Link to="/fonts">Fonts</Link>
                    </li>
                </ul>
            </Links_category_div>
        </Panels_container_div>
    );
}

export default Links_panel;
