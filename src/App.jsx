import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import ContactUs from "./page/ContactUs";
import Client from "./page/Client";
import Application from "./page/Application";
import AboutUs from "./page/AboutUs";
import Products from "./page/Product";
import FloorProtection from "./page/protection";
import CorrosionProtection from "./page/corrosion";
import HygienicWallProtection from "./page/hygine";
import ChemicalProtection from "./page/wall";
import EpoxyCovings from "./page/Epoxy";
import FoodGradeCoating from "./page/Food";
import FlexibleSealants from "./page/Flexible";
import ExteriorWallSystem from "./page/Durable";

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false); // Chatbot visibility state
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot); // Toggle chatbot visibility
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/application" element={<Application />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product" element={<Products />} />
        <Route path="/protection" element={<FloorProtection />} />
        <Route path="/corrosion" element={<CorrosionProtection />} />
        <Route path="/hygine" element={<HygienicWallProtection />} />
        <Route path="/wall" element={<ChemicalProtection />} />
        <Route path="/Epoxy" element={<EpoxyCovings />} />
        <Route path="/Food" element={<FoodGradeCoating />} />
        <Route path="/Flexible" element={<FlexibleSealants />} />
        <Route path="/Durable" element={<ExteriorWallSystem />} />
      </Routes>
      <Footer />

      {/* Chatbot toggle icon */}
      <div
        className="position-fixed chatbot-icon"
        onClick={toggleChatbot}
        title={showChatbot ? "Close Chatbot" : "Open Chatbot"}
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/025/271/424/small_2x/robot-chatbot-generative-ai-free-png.png"
          alt="Chatbot"
        />
      </div>

      {/* Chatbot iframe */}
      {showChatbot && (
        <div className="position-fixed chatbot-container">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/TpoSPHBgtKbBIhhTAmIDQ"
            width="100%"
            height="100%"
            title="Chatbot"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default App;
