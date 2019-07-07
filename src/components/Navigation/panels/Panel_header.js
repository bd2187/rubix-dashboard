import React from "react";
import { format_date } from "../../../config/utils";

function Panel_header({ feed_data, friend }) {
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

export default Panel_header;
