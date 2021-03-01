import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountDown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();

    const difference = +new Date(`04/03/${year}`) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Container>
      <Content>
        <div>{timeLeft.Hari}</div>
        <p>Hari</p>
      </Content>
      <Content>
        <div>{timeLeft.Jam}</div>
        <p>Jam</p>
      </Content>
      <Content>
        <div>{timeLeft.Menit}</div>
        <p>Menit</p>
      </Content>
      <Content>
        <div>{timeLeft.Detik}</div>
        <p>Detik</p>
      </Content>
    </Container>
  );
};

export default CountDown;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 1.5rem;

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;
