import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenfromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify  = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenfromUrl();
    const _token = hash.access_token;
    window.location.hash = ""
    console.log(_token);

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
    };
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="app">
      {/* if there is ayoken render the player screen and if  not then renderv the login page */}
      {
        token ? (
          <h1>Logged In</h1>
        ): (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
