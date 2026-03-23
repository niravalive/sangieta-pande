import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import FooterSection from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
