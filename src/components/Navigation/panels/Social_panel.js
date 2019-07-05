import React from "react";
import { friends } from "../../../config/sample-data";

function Social_panel() {
    var online_friends = [];
    var idle_friends = [];
    var busy_friends = [];
    var offline_friends = [];

    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let friend_markup = <li key={friend.key}>{friend.display_name}</li>;

        if (friend.status === "online") {
            online_friends = [...online_friends, friend_markup];
        } else if (friend.status === "idle") {
            idle_friends = [...idle_friends, friend_markup];
        } else if (friend.status === "busy") {
            busy_friends = [...busy_friends, friend_markup];
        } else if (friend.status === "offline") {
            offline_friends = [...offline_friends, friend_markup];
        }
    }

    return (
        <div className="social-panel">
            <ul>
                <li>
                    <p>Online {online_friends.length}</p>
                </li>
                {online_friends}
            </ul>
            <ul>
                <li>
                    <p>Idle {idle_friends.length}</p>
                </li>
                {idle_friends}
            </ul>
            <ul>
                <li>
                    <p>Busy {busy_friends.length}</p>
                </li>
                {busy_friends}
            </ul>
            <ul>
                <li>
                    <p>Offline {offline_friends.length}</p>
                </li>
                {offline_friends}
            </ul>
        </div>
    );
}

export default Social_panel;
