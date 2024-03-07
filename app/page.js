'use client';
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import styles from "./page.module.css";
import Header from "./components/Header";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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

const Banner = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  border-bottom: 1px solid #fff;
  background-color: #000;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TextContainer = styled.div`
  color: #fff;
  z-index: 2;
  position: absolute;
`;

export default function Home() {
//   var settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     speed: 1500,
//     centerMode: true,
//     centerPadding: '60px',
//     focusOnSelect: true,
//     cssEase: 'ease-in-out',

//     responsive: [
//       {
//         breakpoint: 1100,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: false,
//           speed: 1000,
//         },
//       },
//     ],
//   };

  return (
    <main className={styles.main}>
      <Header />
      <Banner>
        <div
          style={{
            display: 'flex',
          }}
        >
          <TextContainer>
            <h1>Title for banner</h1>
          </TextContainer>
          <ImageContainer>
            <StyledImage src="/art-display/1.jpeg" />
          </ImageContainer>
        </div>
      </Banner>


      {/* <Parallax pages={2} style={{paddingTop: '150px', maxWidth: '1500px', justifyContent: 'center', display: 'flex'}}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <div
            style={{
            }}
          >
            <ParallaxLayer
              offset={0}
              speed={0.1}
            >
              <div style={{display: 'flex', justifyContent: 'end',}}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginRight: '100px',
                    fontSize: '70px',
                    color: 'black',
                    WebkitTextStroke: '2px white',
                    zIndex: '1',
                    position: 'absolute',
                  }}
                >
                  <h1>BRIGHT</h1>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginRight: '100px',
                    fontSize: '70px',
                    color: '#000',
                    zIndex: '2',
                    position: 'absolute',
                  }}
                >
                  <h1>BRIGHT</h1>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={0.12}
              speed={0.3}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                  marginRight: '100px',
                  fontSize: '70px',
                  opacity: '0.9',
                }}
              >
                <h1>VOID</h1>
              </div>
            </ParallaxLayer>
          </div>

          <div
            style={{
              display: 'flex',
            }}
          >
            <div>
              <ParallaxLayer
                offset={0}
                speed={0.1}
                style={{
                  marginLeft: '350px',
                }}
              >
                <div
                  style={{
                    height: '500px',
                    width: '400px',
                    borderRadius: '100%',
                    border: '1px solid white',
                  }}
                >
                </div>
              </ParallaxLayer>
            </div>
            <div>
              <ParallaxLayer
                offset={0}
                speed={0.1}
                style={{
                  marginLeft: '350px',
                }}
              >
                <div
                  style={{
                    height: '450px',
                    width: '400px',
                    borderRadius: '100%',
                    border: '1px solid darkgrey',
                    transform: 'rotate(20deg)',
                  }}
                >
                </div>
              </ParallaxLayer>
            </div>
          </div>
        </div>

        <ParallaxLayer
          offset={0.7}
        >
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
        </ParallaxLayer>
      </Parallax> */}

      <div className={styles.blob2}></div>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div>
    </main>
  );
}
