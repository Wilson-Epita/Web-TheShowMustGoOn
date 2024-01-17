import "./App.css";
import AddToCard from "./components/AddToCard.js";
import ListVinyls from "./components/ListVinyls.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Vinyl Collection</h1>
        <AddToCard />
        <ListVinyls />
      </header>
    </div>
  );
}

export default App;
