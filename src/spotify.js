const redirectUri = 'http://localhost:3000/';
const cliendId = '469989d6b0e54dcfb15e5f476628b011';

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
