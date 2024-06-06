'use client';
import React from 'react';
import styled from 'styled-components';
import styles from './submitArtPage.module.css';
import Header from '../../components/Header';

const HowToBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  border: 1px solid #fff;
`;

export default function submitArt() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '150px'}}>
    <div className={styles.wrapper}>
      <Header />
      <HowToBlock>
        <h2>How to submit</h2>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{margin: '20px'}}>
            <div>
              <p>Guidelines</p>
            </div>
            <div>
              Design requirements, resolution, format, etc.
            </div>
          </div>
          <div style={{margin: '20px'}}>
            <div>
              Legal rights information.
            </div>
            <div>
              How submissions are reviewed.
            </div>
          </div>
        </div>
      </HowToBlock>
      <div>
        Submission form
        <div>Artists name</div>
        <div>
          <div>Title</div>
          <div>Description/story behind it</div>
          About the Artist: A Cosmic Enigma

          🌠 Name: Unknown 🎨 Pseudonym: StellarDreamer

          Biography: StellarDreamer, a reclusive artist shrouded in celestial mystique, emerged from the cosmic tapestry to grace us with their ethereal creations. Born under a meteor shower and raised by starlight, their journey transcends mere mortal existence.

          🌌 Inspirations: StellarDreamer draws inspiration from ancient observatories, forgotten manuscripts, and the whispers of nebulae. Their studio, nestled atop a moonlit peak, resonates with the hum of distant quasars. Each stroke of their brush echoes the cosmic symphony—the birth of galaxies, the collapse of stars, and the eons-old dance of celestial bodies.

          🔭 Themes: Their work seamlessly weaves science and imagination. Armillary spheres, astrolabes, and zodiac constellations converge with intricate patterns, hinting at forgotten star maps. StellarDreamer invites viewers to explore the universe within—a voyage beyond the mundane, guided by cosmic coordinates.

          🌟 Legacy: Despite their anonymity, StellarDreamer’s art has found its way into observatories, planetariums, and private collections across galaxies. Admirers speculate that they exist simultaneously in multiple dimensions, sketching nebulae while sipping stardust tea.

          📜 Quote: “Art is the language of the cosmos,” StellarDreamer once whispered to a passing comet. And indeed, their celestial lexicon continues to captivate, leaving stardust trails in our hearts.
        </div>
        <div>
          Upload feature
        </div>
        <div>
          Agreement checkbox
        </div>
      </div>
      <div>
        FAQ and support
      </div>
    </div>
    </div>
  )
}