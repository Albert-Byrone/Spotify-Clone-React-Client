import './App.css';

function App() {
    const hash = getTokenfromUrl();
    const _token = hash.access_token;
    window.location.hash = ""
    console.log(_token);
  return (
    <div className="app">
      <h1>Spotify-clone</h1>
    </div>
  );
}

export default App;
