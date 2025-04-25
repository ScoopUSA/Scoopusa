import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Driver from "./Driver";
import Rider from "./Rider";
import Contact from "./Contact";
import HomePage from "./HomePage";

export default function App() {
  return (
    <Router>
      <nav className="bg-white shadow-md p-4 flex justify-center space-x-6">
        <Link to="/" className="text-blue-600 font-medium hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 font-medium hover:underline">About</Link>
        <Link to="/driver" className="text-blue-600 font-medium hover:underline">Drivers</Link>
        <Link to="/rider" className="text-blue-600 font-medium hover:underline">Riders</Link>
        <Link to="/contact" className="text-blue-600 font-medium hover:underline">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
