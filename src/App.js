import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
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
      </main>
    </div>
  );
}

export default App;
