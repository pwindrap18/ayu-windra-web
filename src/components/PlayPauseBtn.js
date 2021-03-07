import React from 'react';
import styled from 'styled-components';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

const PlayPauseBtn = ({ playing, setPlaying }) => {
  const playPause = () => {
    setPlaying(!playing);
  };
  console.log(playing);
  return (
    <Btn onClick={playPause}>
      {playing ? <BsFillPauseFill size={20} /> : <BsFillPlayFill size={20} />}
    </Btn>
  );
};

export default PlayPauseBtn;

const Btn = styled.button`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 30px;
  right: 30px;
  outline: none;
  background-color: #fcd1d1;
  border-radius: 100%;
  text-align: center;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  z-index: 3;

  @media screen and (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    height: 30px;
    width: 30px;
  }
`;
