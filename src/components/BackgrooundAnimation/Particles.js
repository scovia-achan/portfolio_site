import Particles from "react-particles-js";
// import profile from "../../../public/images/";
const ParticleBack = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            shape: {
              type: "images",
              image: [
                {
                  src: "../../../public/images/code.svg",
                  height: 20,
                  width: 20,
                },
                {
                  src: "../../../public/images/react.svg",
                  height: 20,
                  width: 20,
                },
              ],
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleBack;
