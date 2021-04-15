import Particles from 'react-particles-js';
function HeaderBackground() {
  return (
    <div className="background-animation">
      aaaa
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default HeaderBackground;
