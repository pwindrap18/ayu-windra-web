import React from 'react';
import styled from 'styled-components';
import Masker from '../images/mask.svg';
import CuciTangan from '../images/wash-your-hands.svg';
import JagaJarak from '../images/social-distancing.svg';
import KontakFisik from '../images/handshake.svg';
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';

const InfoPenting = () => {
  return (
    <InfoContainer id="informasi">
      <InfoContent>
        <Flash>
          <h1>Informasi Penting</h1>
        </Flash>
        <Fade bottom>
          <InfoText>
            <p>Teruntuk keluarga dan teman - temanku</p>
          </InfoText>
          <InfoText>
            <p>
              Keinginan kami adalah dapat bertemu langsung dan merayakan
              pernikahan kami dengan kalian semua.
            </p>
            <p>
              Namun, mengingat situasi dan kondisi yang tidak memungkinkan
              dimasa pandemi Covid-19 ini, kami memohon maaf harus membatasi
              tamu undangan.
            </p>
          </InfoText>
          <InfoText>
            <p>
              Dan untuk menjaga keselamatan dan kesehatan kita semua, acara akan
              dilakukan sesuai protokol kesehatan.
            </p>
          </InfoText>
          <ProkesContent>
            <ProkesItem>
              <img src={Masker} alt="masker" />
              <p>Gunakan masker selama acara berlangsung</p>
            </ProkesItem>
            <ProkesItem>
              <img src={CuciTangan} alt="cuci-tangan" />
              <p>Mencuci tangan dengan sabun atau hand sanitizer</p>
            </ProkesItem>
            <ProkesItem>
              <img src={JagaJarak} alt="jaga-jarak" />
              <p>Menjaga jarak aman</p>
            </ProkesItem>
            <ProkesItem>
              <img src={KontakFisik} alt="kontak-fisik" />
              <p>Hindari kontak fisik</p>
            </ProkesItem>
          </ProkesContent>
          <InfoText>
            <p>Terima kasih atas perhatian dan pengertiannya.</p>
          </InfoText>
          <InfoText>
            <p>Salam hangat,</p>
            <p>Ayu & Windra</p>
          </InfoText>
        </Fade>
      </InfoContent>
    </InfoContainer>
  );
};

export default InfoPenting;

const InfoContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  line-height: 3rem;
  text-align: center;

  h1 {
    font-family: 'Redressed';
    font-size: 3.5rem;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const InfoText = styled.div`
  text-align: center;
  line-height: 1.5rem;
  margin: 2rem 0;
`;

const ProkesContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 3rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProkesItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 1rem 0.5rem;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  line-height: 1.5rem;

  img {
    height: 50px;
    width: 50px;
    margin-bottom: 1rem;
  }
`;
