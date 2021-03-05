import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import Comments from '../components/Comments';
import Cover from '../components/Cover';
import Details from '../components/Details';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import InfoPenting from '../components/InfoPenting';
import Mempelai from '../components/Mempelai';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [playing, setplaying] = useState(false);

  console.log(playing);

  useEffect(() => {
    setInterval(function () {
      setShowModal(false);
    }, 5000);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ReactPlayer
        controls
        url="https://www.youtube.com/watch?v=_Bjf-iExroI"
        width="896px"
        height="504px"
        playing={playing}
        style={{ display: 'none' }}
      />
      <Cover setPlaying={setplaying} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Mempelai />
      <Details />
      <InfoPenting />
      <Comments />
      <Footer />
    </>
  );
};

export default Home;
