import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioHeader from "./compoments/header";
import PortfolioFooter from "./compoments/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Animation from "../src/Animation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PortfolioHeader />
      <div className="relative min-h-screen overflow-hidden">
        <Animation />
        <main className="relative z-10">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
      <PortfolioFooter />
    </>
  );
}

export default App;
