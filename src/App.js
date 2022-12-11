import About from "./components/About/About";
import Agents from "./components/Agents/Agents";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Slide from "./components/Slide/Slide";
import Welcome from "./components/Welcome/Welcome";
import Contact from "./components/Contact/Contact";

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
        <Contact />
      </main>
    </div>
  );
}

export default App;
