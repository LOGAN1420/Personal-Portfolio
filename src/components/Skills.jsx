import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Skill tree data structure
const skillTreeData = {
  // Base skills (first level)
  baseSkills: [
    {
      id: 'game-dev',
      name: 'Game Development',
      icon: '🎮',
      description: 'Creating interactive experiences through programming and design',
      position: { x: -60, y: 20 },
      subSkills: ['unity', 'unreal', 'godot']
    },
    {
      id: '3d-modeling',
      name: '3D Modeling',
      icon: '🧊',
      description: 'Creating three-dimensional digital assets and environments',
      position: { x: 0, y: 0 },
      subSkills: ['blender', 'maya', 'substance']
    },
    {
      id: '2d-art',
      name: '2D Art',
      icon: '🎨',
      description: 'Creating visual assets and illustrations for games',
      position: { x: 60, y: 20 },
      subSkills: ['photoshop', 'illustrator', 'pixel-art']
    }
  ],
  
  // Sub-skills (second level)
  subSkills: {
    // Game Development sub-skills
    'unity': {
      id: 'unity',
      name: 'Unity',
      icon: '🔷',
      description: 'Cross-platform game engine with C# scripting',
      position: { x: -80, y: -10 },
      subSkills: ['unity-vfx', 'unity-animation']
    },
    'unreal': {
      id: 'unreal',
      name: 'Unreal Engine',
      icon: '🔶',
      description: 'High-performance game engine with Blueprint visual scripting',
      position: { x: -70, y: -40 },
      subSkills: ['unreal-blueprints', 'unreal-c++']
    },
    'godot': {
      id: 'godot',
      name: 'Godot',
      icon: '🔵',
      description: 'Open-source game engine with GDScript',
      position: { x: -40, y: -60 },
      subSkills: ['godot-2d', 'godot-3d']
    },
    
    // 3D Modeling sub-skills
    'blender': {
      id: 'blender',
      name: 'Blender',
      icon: '🟠',
      description: 'Open-source 3D creation suite',
      position: { x: -20, y: -70 },
      subSkills: ['blender-modeling', 'blender-animation']
    },
    'maya': {
      id: 'maya',
      name: 'Maya',
      icon: '🔺',
      description: 'Professional 3D animation and modeling software',
      position: { x: 0, y: -75 },
      subSkills: ['maya-rigging', 'maya-animation']
    },
    'substance': {
      id: 'substance',
      name: 'Substance',
      icon: '🔘',
      description: 'Texturing and material creation suite',
      position: { x: 20, y: -70 },
      subSkills: ['substance-painter', 'substance-designer']
    },
    
    // 2D Art sub-skills
    'photoshop': {
      id: 'photoshop',
      name: 'Photoshop',
      icon: '🖌️',
      description: 'Image editing and digital painting',
      position: { x: 40, y: -60 },
      subSkills: ['digital-painting', 'photo-manipulation']
    },
    'illustrator': {
      id: 'illustrator',
      name: 'Illustrator',
      icon: '✒️',
      description: 'Vector graphics and illustration',
      position: { x: 70, y: -40 },
      subSkills: ['vector-art', 'logo-design']
    },
    'pixel-art': {
      id: 'pixel-art',
      name: 'Pixel Art',
      icon: '🎲',
      description: 'Creating art pixel by pixel for retro aesthetics',
      position: { x: 80, y: -10 },
      subSkills: ['sprite-animation', 'tile-design']
    },
    
    // Third level skills (specializations)
    // Unity specializations
    'unity-vfx': {
      id: 'unity-vfx',
      name: 'Unity VFX',
      icon: '✨',
      description: 'Creating visual effects in Unity',
      position: { x: -95, y: -20 },
      subSkills: []
    },
    'unity-animation': {
      id: 'unity-animation',
      name: 'Unity Animation',
      icon: '🏃',
      description: 'Character and object animation in Unity',
      position: { x: -90, y: -40 },
      subSkills: []
    },
    
    // Unreal specializations
    'unreal-blueprints': {
      id: 'unreal-blueprints',
      name: 'Blueprints',
      icon: '📝',
      description: 'Visual scripting in Unreal Engine',
      position: { x: -65, y: -65 },
      subSkills: []
    },
    'unreal-c++': {
      id: 'unreal-c++',
      name: 'Unreal C++',
      icon: '📊',
      description: 'C++ programming for Unreal Engine',
      position: { x: -50, y: -80 },
      subSkills: []
    },
    
    // Godot specializations
    'godot-2d': {
      id: 'godot-2d',
      name: 'Godot 2D',
      icon: '◻️',
      description: '2D game development in Godot',
      position: { x: -30, y: -85 },
      subSkills: []
    },
    'godot-3d': {
      id: 'godot-3d',
      name: 'Godot 3D',
      icon: '🧩',
      description: '3D game development in Godot',
      position: { x: -15, y: -90 },
      subSkills: []
    },
    
    // Blender specializations
    'blender-modeling': {
      id: 'blender-modeling',
      name: 'Blender Modeling',
      icon: '🗿',
      description: '3D modeling in Blender',
      position: { x: -5, y: -90 },
      subSkills: []
    },
    'blender-animation': {
      id: 'blender-animation',
      name: 'Blender Animation',
      icon: '🎬',
      description: 'Character and object animation in Blender',
      position: { x: 5, y: -90 },
      subSkills: []
    },
    
    // Maya specializations
    'maya-rigging': {
      id: 'maya-rigging',
      name: 'Maya Rigging',
      icon: '🦴',
      description: 'Character rigging in Maya',
      position: { x: 15, y: -90 },
      subSkills: []
    },
    'maya-animation': {
      id: 'maya-animation',
      name: 'Maya Animation',
      icon: '🎭',
      description: 'Character and object animation in Maya',
      position: { x: 30, y: -85 },
      subSkills: []
    },
    
    // Substance specializations
    'substance-painter': {
      id: 'substance-painter',
      name: 'Substance Painter',
      icon: '🎨',
      description: 'Texture painting in Substance Painter',
      position: { x: 50, y: -80 },
      subSkills: []
    },
    'substance-designer': {
      id: 'substance-designer',
      name: 'Substance Designer',
      icon: '🧵',
      description: 'Material creation in Substance Designer',
      position: { x: 65, y: -65 },
      subSkills: []
    },
    
    // Photoshop specializations
    'digital-painting': {
      id: 'digital-painting',
      name: 'Digital Painting',
      icon: '🖼️',
      description: 'Creating digital art in Photoshop',
      position: { x: 90, y: -40 },
      subSkills: []
    },
    'photo-manipulation': {
      id: 'photo-manipulation',
      name: 'Photo Manipulation',
      icon: '📸',
      description: 'Editing and compositing photos',
      position: { x: 95, y: -20 },
      subSkills: []
    },
    
    // Illustrator specializations
    'vector-art': {
      id: 'vector-art',
      name: 'Vector Art',
      icon: '📈',
      description: 'Creating scalable vector artwork',
      position: { x: 90, y: 0 },
      subSkills: []
    },
    'logo-design': {
      id: 'logo-design',
      name: 'Logo Design',
      icon: '🏷️',
      description: 'Creating brand identities and logos',
      position: { x: 80, y: 20 },
      subSkills: []
    },
    
    // Pixel Art specializations
    'sprite-animation': {
      id: 'sprite-animation',
      name: 'Sprite Animation',
      icon: '👾',
      description: 'Creating animated pixel art sprites',
      position: { x: 65, y: 40 },
      subSkills: []
    },
    'tile-design': {
      id: 'tile-design',
      name: 'Tile Design',
      icon: '🧱',
      description: 'Creating tileable assets for 2D games',
      position: { x: 45, y: 50 },
      subSkills: []
    }
  }
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
  // Update container size on mount and window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  // Calculate positions based on container size
  const calculatePosition = (position) => {
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const radius = Math.min(centerX, centerY) * 0.85;
    
    return {
      x: centerX + (position.x / 100) * radius,
      y: centerY + (position.y / 100) * radius
    };
  };
  
  // Get skill info by id
  const getSkillById = (id) => {
    const baseSkill = skillTreeData.baseSkills.find(skill => skill.id === id);
    if (baseSkill) return baseSkill;
    
    return skillTreeData.subSkills[id];
  };
  
  // Draw connection lines between skills
  const renderConnections = () => {
    const connections = [];
    
    // Connect base skills to their sub-skills
    skillTreeData.baseSkills.forEach(baseSkill => {
      const basePos = calculatePosition(baseSkill.position);
      
      baseSkill.subSkills.forEach(subSkillId => {
        const subSkill = skillTreeData.subSkills[subSkillId];
        if (subSkill) {
          const subPos = calculatePosition(subSkill.position);
          
          connections.push(
            <ConnectionLine 
              key={`${baseSkill.id}-${subSkill.id}`}
              x1={basePos.x}
              y1={basePos.y}
              x2={subPos.x}
              y2={subPos.y}
              active={selectedSkill === baseSkill.id || selectedSkill === subSkill.id}
              hovered={hoveredSkill === baseSkill.id || hoveredSkill === subSkill.id}
            />
          );
          
          // Connect sub-skills to their specializations
          subSkill.subSkills.forEach(specId => {
            const spec = skillTreeData.subSkills[specId];
            if (spec) {
              const specPos = calculatePosition(spec.position);
              
              connections.push(
                <ConnectionLine 
                  key={`${subSkill.id}-${spec.id}`}
                  x1={subPos.x}
                  y1={subPos.y}
                  x2={specPos.x}
                  y2={specPos.y}
                  active={selectedSkill === subSkill.id || selectedSkill === spec.id}
                  hovered={hoveredSkill === subSkill.id || hoveredSkill === spec.id}
                />
              );
            }
          });
        }
      });
    });
    
    return connections;
  };
  
  // Render all skill nodes
  const renderSkillNodes = () => {
    const nodes = [];
    
    // Render base skills
    skillTreeData.baseSkills.forEach(skill => {
      const pos = calculatePosition(skill.position);
      nodes.push(
        <SkillNode
          key={skill.id}
          x={pos.x}
          y={pos.y}
          skill={skill}
          isSelected={selectedSkill === skill.id}
          isHovered={hoveredSkill === skill.id}
          onClick={() => setSelectedSkill(skill.id)}
          onMouseEnter={() => setHoveredSkill(skill.id)}
          onMouseLeave={() => setHoveredSkill(null)}
          level={1}
        />
      );
    });
    
    // Render all sub-skills
    Object.values(skillTreeData.subSkills).forEach(skill => {
      const pos = calculatePosition(skill.position);
      nodes.push(
        <SkillNode
          key={skill.id}
          x={pos.x}
          y={pos.y}
          skill={skill}
          isSelected={selectedSkill === skill.id}
          isHovered={hoveredSkill === skill.id}
          onClick={() => setSelectedSkill(skill.id)}
          onMouseEnter={() => setHoveredSkill(skill.id)}
          onMouseLeave={() => setHoveredSkill(null)}
          level={skill.subSkills.length > 0 ? 2 : 3}
        />
      );
    });
    
    return nodes;
  };
  
  return (
    <SkillsSection id="skills">
      <Container>
        <ContentWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Skills</SectionTitle>
            <SkillTreeDescription>
              Explore my skill tree to see the abilities I've unlocked throughout my game development journey.
              Click on any skill to view more details.
            </SkillTreeDescription>
          </motion.div>
          
          <SkillTreeContainer ref={containerRef}>
            <svg width="100%" height="100%">
              {renderConnections()}
            </svg>
            {renderSkillNodes()}
            
            {selectedSkill && (
              <SkillDetails>
                <SkillDetailsHeader>
                  <SkillIcon>{getSkillById(selectedSkill)?.icon}</SkillIcon>
                  <SkillName>{getSkillById(selectedSkill)?.name}</SkillName>
                  <CloseButton onClick={() => setSelectedSkill(null)}>×</CloseButton>
                </SkillDetailsHeader>
                <SkillDescription>
                  {getSkillById(selectedSkill)?.description}
                </SkillDescription>
              </SkillDetails>
            )}
          </SkillTreeContainer>
        </ContentWrapper>
      </Container>
    </SkillsSection>
  );
}

// Skill Node Component
const SkillNode = ({ x, y, skill, isSelected, isHovered, onClick, onMouseEnter, onMouseLeave, level }) => {
  return (
    <NodeContainer
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isSelected={isSelected}
      isHovered={isHovered}
      level={level}
    >
      <NodeIcon>{skill.icon}</NodeIcon>
    </NodeContainer>
  );
};

// Connection Line Component
const ConnectionLine = ({ x1, y1, x2, y2, active, hovered }) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={active ? "#A7FF83" : hovered ? "#e0e0e0" : "#444"}
      strokeWidth={active ? 3 : hovered ? 2 : 1}
      strokeOpacity={active ? 1 : hovered ? 0.8 : 0.5}
    />
  );
};

// Styled Components
const SkillsSection = styled.section`
  min-height: 100vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  background: rgba(10, 10, 10, 0.8);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillTreeDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #b3b3b3;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillTreeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  overflow: visible;
  
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const NodeContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: ${props => props.level === 1 ? 60 : props.level === 2 ? 50 : 40}px;
  height: ${props => props.level === 1 ? 60 : props.level === 2 ? 50 : 40}px;
  border-radius: 50%;
  background: ${props => props.isSelected ? 'rgba(167, 255, 131, 0.3)' : 'rgba(30, 30, 30, 0.8)'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s ease;
  border: 2px solid ${props => props.isSelected ? '#A7FF83' : props.isHovered ? '#e0e0e0' : 'rgba(255, 255, 255, 0.2)'};
  box-shadow: 0 0 ${props => props.isSelected ? 15 : props.isHovered ? 10 : 0}px ${props => props.isSelected ? 'rgba(167, 255, 131, 0.5)' : 'rgba(255, 255, 255, 0.2)'};
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    border-color: ${props => props.isSelected ? '#A7FF83' : '#e0e0e0'};
    box-shadow: 0 0 15px ${props => props.isSelected ? 'rgba(167, 255, 131, 0.7)' : 'rgba(255, 255, 255, 0.3)'};
  }
`;

const NodeIcon = styled.div`
  font-size: 1.5rem;
  line-height: 1;
`;

const SkillDetails = styled.div`
  position: absolute;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 400px;
  background: rgba(20, 20, 20, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 3;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const SkillDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-right: 1rem;
`;

const SkillName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #b3b3b3;
  margin: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: #b3b3b3;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  
  &:hover {
    color: white;
  }
`;
