import styled from 'styled-components';
import { motion } from 'framer-motion';

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
              I am a passionate full-stack developer with expertise in building modern web applications.
              My journey in software development started with a curiosity for creating interactive
              experiences, and it has evolved into a professional pursuit of crafting efficient,
              scalable, and user-friendly solutions.
            </Description>
            <SkillsGrid>
              <SkillCard>
                <SkillTitle>Frontend Development</SkillTitle>
                <SkillDescription>
                  React, Next.js, TypeScript, and modern CSS frameworks
                </SkillDescription>
              </SkillCard>
              <SkillCard>
                <SkillTitle>Backend Development</SkillTitle>
                <SkillDescription>
                  Node.js, Express, Python, and database management
                </SkillDescription>
              </SkillCard>
              <SkillCard>
                <SkillTitle>UI/UX Design</SkillTitle>
                <SkillDescription>
                  Figma, Adobe XD, and responsive design principles
                </SkillDescription>
              </SkillCard>
            </SkillsGrid>
          </motion.div>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  padding: 6rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #b3b3b3;
  margin-bottom: 3rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
`;

const SkillDescription = styled.p`
  color: #b3b3b3;
  line-height: 1.6;
`;
