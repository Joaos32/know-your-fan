import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: '#FFD700' },
          links: {
            enable: true,
            color: '#FFD700',
            distance: 120,
            opacity: 0.5,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
        },
        background: { color: '#000000' },
      }}
    />
  );
}