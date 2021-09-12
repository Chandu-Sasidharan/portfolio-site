import React, { useState } from 'react';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import LandingPage from '../components/homePageSections/landingPage';
import Footer from '../components/footer/footer';
import About from '../components/homePageSections/aboutSection';
import { canvasSectionData, blogSectionData } from '../assets/sectionData';
import BlogSection from '../components/homePageSections/blogSection';
import CanvasSection from '../components/homePageSections/canvasSection';
import Portfolio from '../components/homePageSections/portfolio';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <LandingPage />
      <About />
      <Portfolio />
      <CanvasSection {...canvasSectionData} />
      <BlogSection {...blogSectionData} />
      <Footer />
    </>
  );
}

export default Home;
