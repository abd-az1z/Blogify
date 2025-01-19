import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Pages/Footer";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-full relative p-5 bg-black text-white">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;