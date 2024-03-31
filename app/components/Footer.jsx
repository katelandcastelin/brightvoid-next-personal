'use client';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 200px;
  border-radius: 20px 20px 5px 5px;
  border: 1px solid #171717;
  bottom: 0;
  margin: 40px 10px 10px 10px;
  padding: 10px;
  background: radial-gradient(circle at center bottom, rgba(29, 29, 29, 0.8) 0%, #090909 70%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Footer () {
  return (
    <Container>
      <Content>
        HELLO THERE
        <p>Some content</p>
      </Content>
    </Container>
  )
}