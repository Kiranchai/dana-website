import About from "./components/About/About";
import Agents from "./components/Agents/Agents";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Slide from "./components/Slide/Slide";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Welcome />
        <About />
        <Slide />
        <Products />
        <Agents />
      </main>
    </div>
  );
}

export default App;
