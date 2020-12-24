import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenfromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify  = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash = ""
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });
      
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>{
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      });

      spotify.getPlaylist('37i9dQZF1DX5nzJu5E8s8B').then(response =>{
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly: response

        })
      })
    };
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="app">
      {/* if there is ayoken render the player screen and if  not then renderv the login page */}
      {
        token ? (
          <Player spotify={spotify}/>
        ): (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;

