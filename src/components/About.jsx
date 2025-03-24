import styled from 'styled-components';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function About() {
  return (
    <AboutSection id="about">
      <SplineContainer>
        <Spline scene="https://prod.spline.design/Y7G5CbvK-Br4qb5I/scene.splinecode" />
      </SplineContainer>
      <Container>
        <ContentWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>About Me</SectionTitle>
            <Description>
            Hey there! <Highlight>I'm Vishnu</Highlight>, a game developer fueled by <Bold>caffeine and creativity, 
            crafting immersive and interactive experiences</Bold>.<br/><br/> My journey into game development started with pure 
            curiosity—<Italic>how do games actually work?</Italic> That curiosity turned into passion, and now, with <Bold>4 years</Bold> of 
            experience in game development (including <Bold>2.5 years</Bold> of professional work), I bring ideas to life through 
            code, design, and innovation. <br/><br/>But I don’t just stop at coding—I also dive into <Bold>3D modeling and 2D art</Bold>, 
            ensuring every project gets the visual polish it deserves. And that’s just the beginning!
            You can check out more of my skillset in the skills section.
            </Description>
          </motion.div>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  min-height: 100vh;
  background: #030303;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
`;

const SplineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: all;
`;

const Container = styled.div`
  max-width: 50%;
  margin: 0;
  margin-left: 50px;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
  pointer-events: none;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin: 0 auto;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  background: rgba(10, 10, 10, 0.8);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
  margin: 0 auto;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b3b3b3;
  margin-bottom: 3rem;
  text-align: left;
`;

// Styled components for text formatting
const Highlight = styled.span`
  color: #A7FF83;
  font-weight: 600;
`;

const Bold = styled.span`
  font-weight: 700;
  color: white;
`;

const Italic = styled.span`
  font-style: italic;
  color: #e0e0e0;
`;
