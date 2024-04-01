'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 350px;
  border-radius: 20px 20px 5px 5px;
  border: 1px solid #282828;
  margin: 40px 10px 10px 10px;
  padding: 10px;
  background: radial-gradient(circle at center bottom, rgba(59, 59, 59, 0.8) 0%, #0d0d0d 70%);
  background-size: 100% 200%;
`;

const Content = styled.div`
  display: flex;
`;

const SocialsLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    margin-right: 10px;
  }
  
  img {
    height: 30px;
    border-radius: 10px;
    background-color: aliceblue;

    &:hover {
      box-shadow: 
      0 0 5px rgba(9, 9, 121, 0.2),
      0 0 10px rgba(9, 9, 121, 0.3),
      0 0 15px rgba(0, 212, 255, 0.3),
      0 0 60px rgba(0, 212, 255, 0.3);
    }
  }
`;

export default function Footer () {
  return (
    <Container>
      <div>
        <div style={{textAlign: 'center', marginBottom: '10px'}}>
          <p>Get in touch</p>
        </div>
        <SocialsLinks>
          <a href=''>
            <img src='/icons/facebook.png' />
          </a>
          <a href=''>
            <img src='/icons/instagram.png' />
          </a>
          <a href=''>
            <img src='/icons/tiktok.png' />
          </a>
          <a href=''>
            <img src='/icons/twitter.png' />
          </a>
          <a href=''>
            <img src='/icons/discord.png' />
          </a>
          <a href=''>
            <img src='/icons/telegram.png' />
          </a>
        </SocialsLinks>
      </div>
      <Content>
          <div>
            HELLO THERE
            <p>Some content</p>
          </div>
        </Content>
    </Container>
  )
}