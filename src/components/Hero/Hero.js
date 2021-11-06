import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        I am VARINDER KUMAR
      </SectionTitle>
      <SectionText>
        Full stack developer <br /> Regular working on Software Development Life Cycle (SDLC)
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Know More</Button>
    </LeftSection>
  </Section>
);

export default Hero;