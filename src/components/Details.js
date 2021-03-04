import React from 'react';
import styled from 'styled-components';
import DetailBg from '../images/details.jpg';
import { Button } from './ButtonExternal';
import Fade from 'react-reveal/Fade';

const Details = () => {
  return (
    <DetailsContainer id="akad">
      <Fade duration={2000}>
        <DetailsContent>
          <h2>3 April 2021</h2>
          <h3>Akad Nikah & Walimatul 'Urs</h3>
          <p className="jam">Pukul 09.00 - 12.00 WIB</p>
          <p className="resto">SFA Steak & Resto</p>
          <p className="alamat">
            Jl. Kapten Mulyadi, Badran Asri, Cangakan, Kec. Karanganyar,
            Kabupaten Karanganyar, Jawa Tengah 57712
          </p>
          <Button primary="true" round="true">
            <a
              href="https://goo.gl/maps/i72234oUjYxxELkcA"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </Button>
        </DetailsContent>
      </Fade>
    </DetailsContainer>
  );
};

export default Details;

const DetailsContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${DetailBg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 5vw, 3rem);
    padding: 0 1rem;
    font-family: 'Redressed';
  }

  h3 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    padding: 0 1rem;
    font-family: 'Redressed';
  }

  p {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  p.jam {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-top: 0.5rem;
  }

  p.resto {
    text-align: center;
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 600;
  }

  p.alamat {
    text-align: center;
    font-size: clamp(0.8rem, 2.5vw, 1.2rem);
  }
`;
