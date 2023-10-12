import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "../src/App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/menu" exact Component={Menu}/>
          <Route path="/about" exact Component={About}/>
          <Route path="/contact" exact Component={Contact}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
