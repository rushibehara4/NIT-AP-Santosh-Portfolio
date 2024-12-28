import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyNavbar from "./components/navbar";
import Home from "./components/home";
import Research from "./components/research";
import Publication from "./components/publication";
import Presentation from "./components/presentation";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
