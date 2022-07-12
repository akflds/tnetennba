import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";
import "./styles/App.css";

import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <button className="theme-toggle" onClick={switchTheme}>
        {theme === "light" ? "I'm a 🧛" : "I like 🌞"}
      </button>
      <Game />
      <Footer />
    </div>
  );
}

export default App;
