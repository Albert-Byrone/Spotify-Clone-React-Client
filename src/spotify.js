
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
export const getTokenfromUrl = () =>{
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) =>{
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {})
