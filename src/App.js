import "./App.css";
import ListVinyls from "./components/ListVinyls.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Vinyl Collection</h1>
        <ListVinyls />
      </header>
    </div>
  );
}

export default App;
