import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';

export default function Hero() {
  return (
    <HeroContainer>
      <ContentOverlay>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-content"
        >
          <Title>
            I'm Vishnu
            <Role>Game Developer</Role>
          </Title>
          <Description>Creating Interactive Worlds, One Line of Code at a Time.</Description>
          <CTAButton href="#portfolio">View My Work</CTAButton>
          <SocialLinks>
            <SocialLink href="https://github.com/yourusername" target="_blank">
              <IconBrandGithub size={24} stroke={1.5} />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/yourusername" target="_blank">
              <IconBrandLinkedin size={24} stroke={1.5} />
            </SocialLink>
            <SocialLink href="https://twitter.com/yourusername" target="_blank">
              <IconBrandTwitter size={24} stroke={1.5} />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </ContentOverlay>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: transparent;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1000px;
  text-align: center;
  z-index: 2;
  padding: 2rem;
  pointer-events: none;

  .text-content {
    max-width: 100%;
  }

  /* Make specific elements clickable */
  a, button {
    pointer-events: auto;
  }
  
  @media (max-width: 768px) {
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 6px 8px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Role = styled.div`
  font-size: 6rem;
  font-weight: 800;
  color: white;
  margin-top: 0.5rem;
  text-shadow: 2px 6px 8px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  max-width: 100%;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 2px 6px 8px rgba(0, 0, 0, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0 auto 2rem auto;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: transform 0.2s ease, background 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: scale(1.05);
    background: rgba(0, 0, 0, 0.6);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  font-size: 1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    color: white;
    transform: translateY(-3px);
    background: rgba(0, 0, 0, 0.6);
  }
`;
