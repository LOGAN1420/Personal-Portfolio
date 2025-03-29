"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative border-white/[0.1] w-[350px] h-[500px] rounded-xl p-6 border">
        {/* Background image with absolute positioning */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/BG.jpg"
            className="w-full h-full object-cover rounded-xl"
            alt="Background"
          />
        </div>
        
        {/* Profile image with 3D effect */}
        <CardItem translateZ="100" className="relative w-full h-full flex items-center justify-center">
          <img
            src="/Me.png"
            className="w-[480px] h-[580px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Game Development"
            style={{ filter: 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.7))' }}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
