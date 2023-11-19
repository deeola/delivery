
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Download from "./Download";
import Contact from "./Contact";
import Navbar from "./Shared/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <div className="cont-ainer">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/download" element={<Download />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Home />} />
        <Route path="/signup" element={<Home />} />
      </Routes>
    </div>
     
    </BrowserRouter>
  );
};

export default AppRouter;
