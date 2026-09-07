import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
// import Contact from "./pages/contact";
import Contact from './pages/Contact'
import Footer from './components/footer';
import ScrollToTop from "./components/scrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Footer />
    </>
  );
}

export default App;