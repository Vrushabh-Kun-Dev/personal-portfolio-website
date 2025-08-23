import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
      </div>
    </>
  )
}

export default App;