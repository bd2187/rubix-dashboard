import React from "react";
import routes from "../config/routes";
import { App_context } from "../contexts/app-context";

function App() {
    const [is_nav_open, toggle_nav] = React.useState(false);

    const app_state = {
        is_nav_open,
        toggle_nav: () => toggle_nav(!is_nav_open)
    };

    return (
        <App_context.Provider value={app_state}>{routes}</App_context.Provider>
    );
}

export default App;
