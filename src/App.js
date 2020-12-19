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
    }
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
