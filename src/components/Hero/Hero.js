import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Scovia Achan <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This portfolio site shows all the skills I have attained and also
          showcases the projects I have worked on so far.
        </SectionText>
        <a href="https://drive.google.com/file/d/1msr8694ZAZnwGAs1R3ksgQoPj7Pt9D4O/view?usp=sharing">
          <Button>View CV</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
