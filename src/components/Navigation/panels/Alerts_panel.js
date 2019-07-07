import React from "react";
import Panel_header from "./Panel_header";
import { alerts } from "../../../config/sample-data";

function Alerts_panel() {
    var system_wide_alerts_markup = [];
    var node_alerts_markup = [];

    for (let i = 0; i < alerts.length; i++) {
        let alert_data = alerts[i];
        let { type, allow_user_action, chart, id } = alert_data;
        let markup = (
            <li key={id}>
                <Panel_header feed_data={alert_data} />
                {/* todo: set logic here if chart is present */}
                {allow_user_action ? (
                    <div>
                        <button>Restore</button>
                        <button>Destroy</button>
                    </div>
                ) : null}
            </li>
        );

        if (type === "system_wide") {
            system_wide_alerts_markup = [...system_wide_alerts_markup, markup];
        } else if (type === "node") {
            node_alerts_markup = [...node_alerts_markup, markup];
        }
    }

    return (
        <div className="feed-panel">
            <h4>SYSTEM-WIDE ALERTS</h4>
            <ul>{system_wide_alerts_markup}</ul>
            <h4>NODE ALERTS</h4>
            <ul>{node_alerts_markup}</ul>
        </div>
    );
}

export default Alerts_panel;
