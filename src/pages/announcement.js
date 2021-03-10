import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import OneOnly from '../audios/oneonly.mp3';
import Comments from '../components/Comments';
import Details from '../components/Details';
import Footer from '../components/Footer';
import Gift from '../components/Gift';
import HeroSection from '../components/Hero';
import InfoPenting from '../components/InfoPenting';
import Mempelai from '../components/Mempelai';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import PlayPauseBtn from '../components/PlayPauseBtn';

const Home = ({ playing, setPlaying }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <PlayPauseBtn playing={playing} setPlaying={setPlaying} />
      <ReactPlayer
        controls
        url={OneOnly}
        width="896px"
        height="504px"
        playing={playing}
        style={{ display: 'none' }}
      />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Mempelai />
      <Details />
      <InfoPenting />
      <Gift />
      <Comments />
      <Footer />
    </>
  );
};

export default Home;
