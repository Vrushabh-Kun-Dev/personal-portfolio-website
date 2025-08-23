import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
      </div>
    </>
  )
}

export default App;