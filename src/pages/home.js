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
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
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
