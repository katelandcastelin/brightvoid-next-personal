'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import styles from '../../page.module.css';
import Header from '../../components/Header';

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const Scene = styled.div`
  width: 25rem;
  height: 25rem;
  margin: auto;
  perspective: 100rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  transform: rotateX(180deg) rotateY(180deg);
  transform-style: preserve-3d;
`;

const Globe = styled.div`
  position: relative;
  width: 70%;
  height: 70%;
  margin: 0 auto;
  transform-style: preserve-3d;
  animation: ${spin} 25s linear infinite;
`;

const Ring = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0.3rem;
  border-style: dotted;
  border-radius: 50%;
  color: #7ad4f8;
  transform: rotateY(4deg) rotateX(75deg) scale(1.5);

  &:nth-child(1) {
    transform: rotateY(4deg) rotateX(75deg) scale(2);
    border-style: dashed;
  }
`;

const MaxWidthWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  gap: 80px;
`;

const Section = styled.div`
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  width: 50%;
`;

const ActionButton = styled.button`
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid #fff;
  background-color: transparent;
  cursor: pointer;
  padding: 10px 15px;
  transition: box-shadow 0.3s ease-in-out, text-shadow 0.3s ease-in-out;

  &:hover {
    text-shadow:
      0 0 5px rgba(9, 9, 121, 0.5),
      0 0 15px rgba(9, 9, 121, 0.5),
      0 0 25px rgba(0, 212, 255, 0.5),
      0 0 3px rgba(9, 9, 121, 0.5),
      0 0 5px rgba(9, 9, 121, 0.5),
      0 0 15px rgba(9, 9, 121, 0.5),
      0 0 25px rgba(0, 212, 255, 0.5),
      0 0 30px rgba(0, 212, 255, 0.5);

    box-shadow: 
      0 0 5px rgba(9, 9, 121, 0.2),
      0 0 10px rgba(9, 9, 121, 0.3),
      0 0 15px rgba(0, 212, 255, 0.3),
      0 0 60px rgba(0, 212, 255, 0.3);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  padding: 2rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  box-sizing: border-box;
`;

const FormTextArea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  box-sizing: border-box;
  min-height: 100px;
`;

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <Header />
      <MaxWidthWrapper>
        <InfoContainer>
          <Section style={{textAlign: 'end'}}>
            <h2>Our Artists</h2>
            <p>Discover artworks ready to be featured on your next t-shirt.</p>
          </Section>
          <Section>
            <h2>Submit Your Art</h2>
            <p>Have your designs reach a wide audience and get featured on our merchandise.</p>
            <ActionButton>Submit Art</ActionButton>
          </Section>
        </InfoContainer>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <FormContainer>
            <h2>Contact Us</h2>
            <FormInput type="text" placeholder="Your Email" />
            <FormTextArea placeholder="Your Message"></FormTextArea>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <ActionButton>Send Message</ActionButton>
            </div>
          </FormContainer>
        </div>
      </MaxWidthWrapper>

      <Scene>
        <Wrapper>
          <div style={{height: '100%', display: 'flex', alignItems: 'end'}}>
            <Globe>
              <Ring />
              <Ring />
            </Globe>
          </div>
        </Wrapper>
      </Scene>
    </div>
  )
}
