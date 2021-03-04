import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>A&W</SocialLogo>
            <WebsiteRights>
              A&W <BiCopyright />
              All rights reserved.
            </WebsiteRights>
            <WebsiteRights>Karanganyar, 2021</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #000;
`;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 12px 0;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: 'Sacramento';
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 10px;
`;
