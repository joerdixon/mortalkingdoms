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
import Locations from "./Components/Page/Locations/Locations.jsx";
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
      {/* The Router object contains all routes and links */}
      <BrowserRouter>
        <div>
          {/* Links to the different routes are held in the Navigation component. */}
          <Navigation />
          {/* All Pages */} 
          <div id='routeContainer'>
            <Routes>
              <Route path="/artifacts" element={<Artifacts />}/>
              <Route path="/characters" element={<Characters />}/>
              <Route path="/" element={<Home />}/>
              <Route path="/map" element={<Map />}/>
              <Route path="/locations" element={<Locations />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;