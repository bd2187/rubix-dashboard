export const friends = [
    {
        name: "jordyn-ouellet",
        display_name: "Jordyn Ouellet",
        status: "online",
        id: "001"
    },
    {
        name: "ava-parry",
        display_name: "Ava Parry",
        status: "online",
        id: "002"
    },
    {
        name: "angelina-mills",
        display_name: "Angelina Mills",
        status: "online",
        id: "003"
    },
    {
        name: "crystal-ford",
        display_name: "Crystal Ford",
        status: "online",
        id: "004"
    },
    {
        name: "toby-king",
        display_name: "Toby king",
        status: "idle",
        id: "005"
    },
    {
        name: "ju-lan",
        display_name: "Ju Lan",
        status: "idle",
        id: "006"
    },
    {
        name: "lana-collin",
        display_name: "Lana Collin",
        status: "idle",
        id: "007"
    },
    {
        name: "alexandra-mordin",
        display_name: "Alenda Mordin",
        status: "idle",
        id: "008"
    },
    {
        name: "jonas-schafer",
        display_name: "Jonas Schafer",
        status: "busy",
        id: "009"
    },
    {
        name: "ricardo-ibarra",
        display_name: "Ricardo Ibarra",
        status: "busy",
        id: "010"
    },
    {
        name: "the-unknown",
        display_name: "The Unknown",
        status: "busy",
        id: "011"
    },
    {
        name: "evan-poulain",
        display_name: "Evan Poulain",
        status: "offline",
        id: "012"
    },
    {
        name: "canan-erdem",
        display_name: "Canan Erdem",
        status: "offline",
        id: "013"
    },
    {
        name: "antelope-inc",
        display_name: "Antelope Inc.",
        status: "offline",
        id: "014"
    }
];

export const feed = [
    {
        type: "friend_request",
        timestamp: 1565420400000,
        friend: {
            name: "jordyn-ouellet",
            display_name: "Jordyn Ouellet",
            id: "001"
        },
        message: "Sent you a friend request",
        id: "192djwui19s"
    },

    {
        type: "check_in",
        timestamp: 1565334000000,
        friend: "Toby King",
        friend: {
            name: "toby-king",
            display_name: "Toby king",
            id: "005"
        },
        message:
            "Visiting The Museum of Modern Art at 11 W 53rd St, New York, NY 10019",
        location: "",
        id: "sj3829sj120s"
    },

    {
        type: "self_status",
        timestamp: 1565247600000,
        friend: "",
        message: "Driving through! :)",
        image: "",
        id: "ls012mza0915"
    },

    {
        type: "message",
        timestamp: 1565247600000,
        friend: {
            name: "angelina-mills",
            display_name: "Angelina Mills",
            id: "003"
        },
        message: "Hey you free tomorrow? Lets go shopping!",
        id: "b0al12j48fpz"
    }
];

export const alerts = [
    {
        type: "system_wide",
        timestamp: 1565593200000,
        message: "Spike in network traffic detected.",
        allow_user_action: false,
        chart: {
            status: true,
            type: "bar",
            data: []
        },
        id: "dj18alpqoe9v"
    },
    {
        type: "system_wide",
        timestamp: 1565420400000,
        message: "Node 1 down for 30 minutes! Take action!",
        allow_user_action: true,
        chart: {
            status: false
        },
        id: "dq1aavpboed9"
    },
    {
        type: "node",
        timestamp: 1565593200000,
        message: "CPU running at 100% on Node 1.",
        allow_user_action: false,
        chart: {
            status: false
        },
        id: "ajsssl4qoe2p"
    },
    {
        type: "node",
        timestamp: 1565420400000,
        message:
            "Running out of disk space on Node 2, Node 3, Node 5 and Node 7",
        allow_user_action: false,
        chart: {
            status: true,
            type: "pie",
            data: []
        },
        id: "da1dalvqoe1v"
    }
];
