import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingDown = latest > lastScrollY;
    setHidden(scrollingDown);
    setLastScrollY(latest);
  });

  return (
    <NavContainer
      as={motion.nav}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
      initial={false}
    >
      <NavContent>
        <Logo>VISHNU</Logo>
        <NavLinks>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#portfolio">Portfolio</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  pointer-events: auto;

  &:hover {
    color: white;
  }
`;
