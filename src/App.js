import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by Svenja Greif and is{" "}
          <a
            href="https://github.com/svenjakg/weather_app_react"
            target="_blank"
            rel="noreferrer"
          >
            open source on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
