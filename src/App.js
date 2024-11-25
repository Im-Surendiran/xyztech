import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Layout from './components/layouts/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="our-services" element={<OurServices />} />
        </Route >
      </Routes>
    </Router>
 );
}

export default App;
