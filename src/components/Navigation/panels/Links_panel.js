import React, { useState } from "react";
import { Link } from "react-router-dom";
function Links_panel() {
    const [is_mailbox_expanded, expand_mailbox] = useState(false);
    const [is_blog_expanded, expand_blog] = useState(false);

    function expand_list(is_expanded, toggle_sublist) {
        toggle_sublist(!is_expanded);
    }

    return (
        <div className="links-panel">
            <input type="text" placeholder="Search..." />
            <div className="">
                <h1>Pages</h1>
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
        </div>
    );
}

export default Links_panel;
