import React from "react";
// Components
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Header/Navigation.jsx';
import Artifacts from "./Components/Page/Artifacts/Artifacts.jsx";
import Characters from "./Components/Page/Characters/Characters.jsx";
import History from "./Components/Page/History/History.jsx";
import Home from "./Components/Page/Home/Home.jsx";
import Map from "./Components/Page/Map/Map.jsx";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/location/")
      .then((res) => res.json())
      .then((data) => setData(data[0].name));
  }, []);

  return (  
    <div className="App">
      <header className="App-header">
        <Header />
        <Artifacts />
        <Characters />
        <History />
        <Home />
        <Map />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;