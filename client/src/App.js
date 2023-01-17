import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
// Components
// TODO: is there any real use for the header?
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
    fetch("/api/character/")
      .then((res) => res.json())
      .then((data) => setData(data[0].name));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <div id='routeContainer'>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/artifacts" element={<Artifacts />}/>
              <Route path="/characters" element={<Characters />}/>
              <Route path="/map" element={<Map />}/>
              <Route path="/history" element={<History />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      {/* <header className="App-header">
        <Header />
        <Artifacts />
        <Characters />
        <History />
        <Home />
        <Map />
        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;