import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";



function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
