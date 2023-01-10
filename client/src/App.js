import React from "react";
// Components

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/hi")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;