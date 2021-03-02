import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

import ImageAyu from '../images/ayu.jpg';
import ImageWindra from '../images/windra.jpg';

const Mempelai = () => {
  return (
    <MempelaiContainer id="mempelai">
      <Bismillah>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</Bismillah>
      <Surat>
        “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
        isteri-isteri dari jenismu sendiri, supaya kamu merasa tenang dan
        tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
        bagi kaum yang berfikir.”
      </Surat>
      <Surat>(QS. Ar-Rum: 21)</Surat>
      <InfoWrapper>
        <Info>
          <img src={ImageAyu} alt="ayu" />
          <h3>Yunita Ayu Pramesti</h3>
          <p>Putri pertama dari Bapak Suwignyo Rustam dan Ibu Sugiarsi</p>
          <InstaWrapper>
            <a
              href="https://www.instagram.com/ayuprmsty/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaBtn>
                <FaInstagram size={15} color={'#fff'} />
                <p>ayuprmsty</p>
              </InstaBtn>
            </a>
          </InstaWrapper>
        </Info>
        <AndContainer>
          <h1>&</h1>
        </AndContainer>
        <Info>
          <img src={ImageWindra} alt="windra" />
          <h3>Prasetya Windra Pratama</h3>
          <p>
            Putra pertama dari Bapak Harry Wiendharto (alm) dan Ibu Nuri
            Satyawati
          </p>
          <InstaWrapper>
            <a
              href="https://www.instagram.com/pwindrap/"
              target="_blank"
              rel="noreferrer"
            >
              <InstaBtn>
                <FaInstagram size={15} color={'#fff'} />
                <p>pwindrap</p>
              </InstaBtn>
            </a>
          </InstaWrapper>
        </Info>
      </InfoWrapper>
    </MempelaiContainer>
  );
};

export default Mempelai;

const MempelaiContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`;
const Bismillah = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 500;
  font-family: 'Sacramento';
`;
const Surat = styled.div`
  text-align: center;
  font-size: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 3rem;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 1rem;
  width: 50%;

  h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-family: 'Sacramento';
    font-style: italic;
  }

  p {
    color: #3b3b3b;
    font-size: 0.9rem;

    @media screen and (max-width: 500px) {
      font-size: 0.6rem;
    }
  }

  img {
    border-radius: 100px;
    height: 200px;
    width: 200px;
    margin-bottom: 12px;

    @media screen and (max-width: 500px) {
      border-radius: 100px;
      height: 200px;
      width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const InstaWrapper = styled.div`
  margin-top: 14px;
  font-size: 1.3rem;
  align-items: center;
  text-align: center;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  p {
    color: #fff;
    outline: none;
    margin-left: 5px;
    font-weight: bold;
    font-size: 12px;
  }
`;

const AndContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 8rem;
  font-size: 3rem;
  font-style: italic;

  h1 {
    font-family: 'Kalam';
  }

  @media screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

const InstaBtn = styled.button`
  border-radius: 50px;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '6px 20px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#000')};
  }
`;