import React from "react";
import Panel_header from "./Panel_header";
import { feed } from "../../../config/sample-data";

function Feed_panel() {
    var feed_markup = [];

    for (let i = 0; i < feed.length; i++) {
        let feed_data = feed[i];
        let { friend, type, id, location, image } = feed_data;
        let markup = null;

        if (type === "friend_request") {
            markup = (
                <li key={id}>
                    <Panel_header feed_data={feed_data} friend={friend} />
                    <div>
                        <div>
                            <button>Accept</button>
                            <button>Reject</button>
                        </div>
                    </div>
                </li>
            );
        } else if (type === "check_in") {
            markup = (
                <li key={id}>
                    <Panel_header feed_data={feed_data} friend={friend} />
                    <div>
                        {/* location */}
                        <p>map placeholder</p>
                    </div>
                </li>
            );
        } else if (type === "self_status") {
            markup = (
                <li key={id}>
                    <Panel_header feed_data={feed_data} friend={friend} />
                    {image ? (
                        <div>
                            <img src={image} />
                        </div>
                    ) : null}
                </li>
            );
        } else {
            markup = (
                <li key={id}>
                    <Panel_header feed_data={feed_data} friend={friend} />
                </li>
            );
        }

        feed_markup = [...feed_markup, markup];
    }

    return (
        <div className="feed-panel">
            <ul>{feed_markup}</ul>
        </div>
    );
}

export default Feed_panel;
