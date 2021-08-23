import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Scovia Achan <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        This portfolio site shows all the skills I have attained and also showcases the projects I have worked on so far.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;