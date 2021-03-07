import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import './giftStyles.css';
import BCASvg from '../images/bca.svg';
import MandiriSvg from '../images/mandiri.svg';
import OVOSvg from '../images/ovo.svg';
import OVOQR from '../images/ovoqr.jpeg';

export default function Gift() {
  return (
    <Container>
      <AnimateSharedLayout>
        <GiftTitle>Hadiah Untuk Kami</GiftTitle>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          <Bca></Bca>
          <Mandiri></Mandiri>
          <Ovo></Ovo>
        </motion.ul>
      </AnimateSharedLayout>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 650px;
  background-color: #fcd1d1;
`;

const GiftTitle = styled.span`
  font-family: 'Redressed';
  font-size: 42px;
  margin-bottom: 10px;
`;

function Mandiri() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>
        <MandiriLogo src={MandiriSvg} alt="mandiri" />
      </motion.div>
      <AnimatePresence>{isOpen && <ContentMandiri />}</AnimatePresence>
    </motion.li>
  );
}

const MandiriLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-left: 90px;
`;

function Bca() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>
        <BcaLogo src={BCASvg} alt="bca" />
      </motion.div>
      <AnimatePresence>{isOpen && <ContentBca />}</AnimatePresence>
    </motion.li>
  );
}

const BcaLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-left: 87px;
`;

function Ovo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div layout>
        <OVOLogo src={OVOSvg} alt="ovo" />
      </motion.div>
      <AnimatePresence>{isOpen && <ContentOvo />}</AnimatePresence>
    </motion.li>
  );
}

const OVOLogo = styled.img`
  height: 60px;
  width: 30px;
  margin-left: 100px;
`;

function ContentBca() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContentWrapper>
        <Content>Nomor Rekening: 8870237953</Content>
        <Content>A/N Prasetya Windra Pratama</Content>
      </ContentWrapper>
    </motion.div>
  );
}

const Content = styled.p`
  text-align: center;
  font-size: 15px;
`;

const ContentWrapper = styled.div`
  padding: 10px 0;
`;

function ContentMandiri() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContentWrapper>
        <Content>Nomor Rekening: 1380016491248</Content>
        <Content>A/N Yunita Ayu Pramesti</Content>
      </ContentWrapper>
    </motion.div>
  );
}

function ContentOvo() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <OvoQr src={OVOQR} alt="ovoqr" />
    </motion.div>
  );
}

const OvoQr = styled.img`
  height: 200px;
  width: 200px;
  margin: 0 20px;
`;
