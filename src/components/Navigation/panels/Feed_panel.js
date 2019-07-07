import React from "react";
import { feed } from "../../../config/sample-data";
import { format_date } from "../../../config/utils";

function Feed_notification({ feed_data, friend }) {
    return (
        <div>
            {friend ? (
                <div>
                    <img src={`/avatar_${friend.id}`} />
                    <h2>{friend.display_name}</h2>
                </div>
            ) : null}

            <p>{format_date(feed_data.timestamp)}</p>
            <p>{feed_data.message}</p>
        </div>
    );
}

function Feed_panel() {
    var feed_markup = [];

    for (let i = 0; i < feed.length; i++) {
        let feed_data = feed[i];
        let { friend, type, id, location, image } = feed_data;
        let markup = null;

        if (type === "friend_request") {
            markup = (
                <li key={id}>
                    <Feed_notification feed_data={feed_data} friend={friend} />
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
                    <Feed_notification feed_data={feed_data} friend={friend} />
                    <div>
                        {/* location */}
                        <p>map placeholder</p>
                    </div>
                </li>
            );
        } else if (type === "self_status") {
            markup = (
                <li key={id}>
                    <Feed_notification feed_data={feed_data} friend={friend} />
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
                    <Feed_notification feed_data={feed_data} friend={friend} />
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
