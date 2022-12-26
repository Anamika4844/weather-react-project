import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Anamika Saxena and{" "}
          <a
            href="https://github.com/Anamika4844/weather-react-projectn"
            target="_blank"
          >
            is a open sourced on Github{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
