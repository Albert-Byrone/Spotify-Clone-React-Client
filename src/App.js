import './App.css';

function App() {
    const hash = getTokenfromUrl();
    const _token = hash.access_token;
    window.location.hash = ""
    console.log(_token);
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
    }
  return (
    <div className="app">
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
