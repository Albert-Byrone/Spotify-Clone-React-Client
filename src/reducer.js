export const initialState = {
    user:null,
    playlist: [],
    playing: false,
    item: null,
    // token: 'BQBVbSKvNZvB_1ExKFg7NiLgLR8GH2REBumb1V52vOJa0C32iDrEdNnHdKfV5xTBG4Ew4OgzG2B1vDS4ybTDkImjgLTLQbZR_nZ2rUU80QUnts3AD7QVud61TyxjqQY6jh0MIOEzPJ1lOb9wh2n4DxtcjfIhVQScuY3UvnbLhihKPTER',
};

// set the initial valu to the token for testing

const reducer = (state, action ) => {
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_TRACKS":
            return {
                ...state,
                tracks: action.tracks
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlist
            };
        case "SET_DISCOVER_WEEKLY":
            return {
            ...state,
            discover_weekly: action.discover_weekly,
            };
        case "SET_CURRENT_PLAYLIST":
            let currentPlaylist = null;
            state.playlists.items.forEach(playlist => {
                if(playlist.id === action.id){
                    currentPlaylist = playlist;
                }
            });
            return {
                ...state,
                current_playlist: currentPlaylist
            }
        default:
            console.log("this s the state",state)
            return state;
    }
}

export default reducer;