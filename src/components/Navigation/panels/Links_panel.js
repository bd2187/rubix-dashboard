import React, { useState } from "react";
import { Link } from "react-router-dom";
function Links_panel() {
    const [is_mailbox_expanded, expand_mailbox] = useState(false);
    const [is_blog_expanded, expand_blog] = useState(false);
    const [is_charts_expanded, expand_charts] = useState(false);
    const [is_rubix_charts_expanded, expand_rubix_charts] = useState(false);
    const [is_ui_elements_expanded, expand_ui_elements] = useState(false);
    const [is_forms_expanded, expand_forms] = useState(false);
    const [is_tables_expanded, expand_tables] = useState(false);
    const [is_file_utilities_expanded, expand_file_utilities] = useState(false);

    function expand_list(is_expanded, toggle_sublist) {
        toggle_sublist(!is_expanded);
    }

    return (
        <div className="links-panel">
            <input type="text" placeholder="Search..." />
            <div className="links-panel__section">
                <h4>Pages</h4>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <p
                            onClick={() =>
                                expand_list(is_mailbox_expanded, expand_mailbox)
                            }
                        >
                            Mailbox
                        </p>
                        <ul>
                            {is_mailbox_expanded ? (
                                <>
                                    <li>
                                        <Link to="/mailbox/inbox">Inbox</Link>
                                    </li>
                                    <li>
                                        <Link to="/mailbox/mail">Mail</Link>
                                    </li>
                                    <li>
                                        <Link to="/mailbox/compose">
                                            Compose
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/social">Social</Link>
                    </li>
                    <li>
                        <p
                            onClick={() =>
                                expand_list(is_blog_expanded, expand_blog)
                            }
                        >
                            Blog
                        </p>
                        <ul>
                            {is_blog_expanded ? (
                                <>
                                    <li>
                                        <Link to="/blog/posts">Posts</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/post">Single Post</Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="links-panel__section">
                <h4>Components</h4>
                <ul>
                    <li>
                        <Link to="/panels">Panels</Link>
                    </li>
                    <li>
                        <p
                            onClick={() =>
                                expand_list(is_charts_expanded, expand_charts)
                            }
                        >
                            Charts
                        </p>
                        <ul>
                            {is_charts_expanded ? (
                                <>
                                    <li>
                                        <p
                                            onClick={() =>
                                                expand_list(
                                                    is_rubix_charts_expanded,
                                                    expand_rubix_charts
                                                )
                                            }
                                        >
                                            Rubix Charts
                                        </p>
                                        <ul>
                                            {is_rubix_charts_expanded ? (
                                                <>
                                                    <li>
                                                        <Link to="/charts/rubix/line">
                                                            Line Series
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/charts/rubix/area">
                                                            Area Series
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/charts/rubix/barcol">
                                                            Bar + Column Series
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/charts/rubix/mixed">
                                                            Mixed Series
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/charts/rubix/piedonut">
                                                            Pie + Donut Series
                                                        </Link>
                                                    </li>
                                                </>
                                            ) : null}
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/charts/chartsjs">
                                            Charts.JS
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/charts/c3js">C3.JS</Link>
                                    </li>
                                    <li>
                                        <Link to="/charts/morrisjs">
                                            Morris.JS
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <Link to="/timeline">Static Timeline</Link>
                    </li>
                    <li>
                        <Link to="/interactive-timeline">
                            Interactive Timeline
                        </Link>
                    </li>
                    <li>
                        <Link to="/codemirror">Codemirror</Link>
                    </li>
                    <li>
                        <Link to="/maps">Maps</Link>
                    </li>
                    <li>
                        <Link to="/editor">Editor</Link>
                    </li>
                    <li>
                        <p
                            onClick={() =>
                                expand_list(
                                    is_ui_elements_expanded,
                                    expand_ui_elements
                                )
                            }
                        >
                            UI Elements
                        </p>
                        <ul>
                            {is_ui_elements_expanded ? (
                                <>
                                    <li>
                                        <Link to="/ui-elements/buttons">
                                            Inbox
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ui-elements/dropdowns">
                                            Mail
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ui-elements/tabs-and-navs">
                                            Tabs & Navs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ui-elements/sliders">
                                            Sliders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ui-elements/knobs">
                                            Knobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ui-elements/modals">
                                            Modals
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/ui-elements/messenger">
                                            Messenger
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <p
                            onClick={() =>
                                expand_list(is_forms_expanded, expand_forms)
                            }
                        >
                            Forms
                        </p>
                        <ul>
                            {is_forms_expanded ? (
                                <>
                                    <li>
                                        <Link to="/forms/controls">
                                            Controls
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/forms/x-editables">
                                            Mail
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/forms/wizard">Wizard</Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <p
                            onClick={() =>
                                expand_list(is_tables_expanded, expand_tables)
                            }
                        >
                            Tables
                        </p>
                        <ul>
                            {is_tables_expanded ? (
                                <>
                                    <li>
                                        <Link to="/tables/bootstrap-tables">
                                            Bootstrap Tables
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tables/datatables">
                                            Datatables
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tables/tablesaw">
                                            Tablesaw
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <Link to="/grid">Grid</Link>
                    </li>
                    <li>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                        <p
                            onClick={() =>
                                expand_list(
                                    is_file_utilities_expanded,
                                    expand_file_utilities
                                )
                            }
                        >
                            File Utilities
                        </p>
                        <ul>
                            {is_file_utilities_expanded ? (
                                <>
                                    <li>
                                        <Link to="/file-utilities/dropzone">
                                            Bootstrap Tables
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/file-utilities/image-cropping">
                                            Image Cropping
                                        </Link>
                                    </li>
                                </>
                            ) : null}
                        </ul>
                    </li>
                    <li>
                        <Link to="/fonts">Fonts</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Links_panel;
