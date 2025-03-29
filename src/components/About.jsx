import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThreeDCardDemo from './ui/3d-card-demo';

export default function About() {
  return (
    <AboutSection id="about">
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
              code, design, and innovation. <br/><br/>But I don't just stop at coding—I also dive into <Bold>3D modeling and 2D art</Bold>, 
              ensuring every project gets the visual polish it deserves. And that's just the beginning!
              You can check out more of my skillset in the skills section.
            </Description>
          </motion.div>
        </ContentWrapper>
      </Container>
      
      <CardContainer>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ThreeDCardDemo />
        </motion.div>
      </CardContainer>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  min-height: 100vh;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  position: relative;
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
  
  @media (max-width: 1024px) {
    max-width: 80%;
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin: 0 auto;
    max-width: 90%;
  }
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  background: rgba(10, 10, 10, 0.8);
  padding: 3rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);  
  pointer-events: auto;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: auto;
  z-index: 2;
  
  @media (max-width: 1024px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin: 3rem auto 0;
    display: flex;
    justify-content: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 0;
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
