'use client';
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import styles from "./page.module.css";
import Header from "./components/Header";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`
  max-width: 1500px;
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 70px;
`;

const SliderDiv = styled.div`
  height: 250px;
  padding: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 1500,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    cssEase: 'ease-in-out',

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          speed: 1000,
        },
      },
    ],
  };

  return (
    <main className={styles.main}>
      <Header />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <SliderContainer>
          <StyledSlider {...settings}>
            <SliderDiv>
              <img src="/artworks/ai1.png" />
            </SliderDiv>
            <SliderDiv>
              <img src="/artworks/ai2.png" />
            </SliderDiv>
            <SliderDiv>
              <img src="/artworks/collection1/collection1.jpeg" />
            </SliderDiv>
            <SliderDiv>
              <img src="/art-display/1.jpeg" />
            </SliderDiv>
            <SliderDiv>
              <img src="/art-display/3.jpeg" />
            </SliderDiv>
            <SliderDiv>
              <img src="/art-display/4.jpeg" />
            </SliderDiv>
          </StyledSlider>
        </SliderContainer>
      </div>

      <div className={styles.blob2}></div>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div>
    </main>
  );
}
