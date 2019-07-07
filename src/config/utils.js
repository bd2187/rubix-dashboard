export function format_date(timestamp) {
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    var date = new Date(timestamp);

    return `${
        months[date.getUTCMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
}
