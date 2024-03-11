import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components1/Header';
import Footer from './Components1/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import './index.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import About from './Components/About';
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const theme =  {
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #a1435",
      helper: "#8490ff",
      bg: "rgb(24 24 27)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
    }
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      // Add other options as needed
    });
 }); // Empty dependency array ensures the effect runs once on mount


  return (
    <div ref={containerRef}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div >
            {/* Add the containerRef to the parent div */}
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
