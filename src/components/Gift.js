import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { BiSmile } from 'react-icons/bi';

import './giftStyles.css';
import BCASvg from '../images/bca.svg';
import MandiriSvg from '../images/mandiri.svg';
import OVOSvg from '../images/ovo.svg';
import OVOQR from '../images/ovoqr.jpeg';

export default function Gift() {
  return (
    <Container id="gift">
      <AnimateSharedLayout>
        <GiftTextWrapper>
          <GiftTitle>Hadiah Untuk Kami</GiftTitle>
          <GiftText>
            Doa dan restu adalah berkah untuk kebahagiaan kami, kehadiran kalian
            tak dapat digantikan oleh apapun namun jika hadiah adalah bentuk
            tanda kasih, fitur ini akan memudahkan kalian untuk memberikan
            hadiah terbaik untuk kami.
          </GiftText>
          <GiftText>
            Terimakasih banyak <BiSmile />
          </GiftText>
        </GiftTextWrapper>

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
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  height: 650px;
  background-color: #fcd1d1;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 800px;
  }
`;

const GiftTitle = styled.span`
  font-family: 'Redressed';
  font-size: 42px;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 32px;
  }
`;

const GiftTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const GiftText = styled.div`
  font-size: 1rem;
  text-align: start;
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
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
