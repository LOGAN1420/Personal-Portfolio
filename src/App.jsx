import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';

export default function App() {
  return (
    <AppContainer>
      <GlobalSplineContainer>
        <Spline scene="https://prod.spline.design/UAUKcmpVknAOqjjW/scene.splinecode" />
      </GlobalSplineContainer>
      <ContentContainer>
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </ContentContainer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
`;

const GlobalSplineContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: all;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  pointer-events: none;
  
  /* Make specific elements clickable */
  a, button, input, select, textarea {
    pointer-events: auto;
  }
`;
