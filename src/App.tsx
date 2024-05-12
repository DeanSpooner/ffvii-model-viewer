import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Character } from "./utils/characters";
import Model from "./components/Model";
import styled from "styled-components";

const useSlider = (
  min: number,
  max: number,
  defaultState: number,
  step: number,
  label: string,
  id: string
) => {
  const [state, setSlide] = useState(defaultState);

  // @ts-expect-error TODO: Event is too 'wide' to easily type at this point - fix this.
  const handleChange = e => {
    setSlide(e.target.value);
  };

  const props = {
    type: "range",
    min,
    max,
    label,
    step,
    id,
    value: state,
    onChange: handleChange,
  };
  return props;
};

function App() {
  const [char, setChar] = useState("cloud" as Character | "all");

  const [spinX, setSpinX] = useState(false);
  const [spinY, setSpinY] = useState(true);
  const [spinZ, setSpinZ] = useState(false);

  const sliderProps = useSlider(
    1,
    10,
    5,
    1,
    "Spotlight intensity",
    "spotlightIntensity"
  );

  const xProps = useSlider(-5, 5, 0, 0.5, "X position", "xPosition");
  const yProps = useSlider(-5, 5, -1, 0.5, "Y position", "yPosition");
  const zProps = useSlider(-5, 5, 3, 0.5, "Z position", "zPosition");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <div>
        <Button onClick={() => setChar("cloud")}>Cloud</Button>
        <Button onClick={() => setChar("sephiroth")}>Sephiroth</Button>
        <Button onClick={() => setChar("aerith")}>Aerith</Button>
        <Button onClick={() => setChar("tifa")}>Tifa</Button>
        <Button onClick={() => setChar("barret")}>Barret</Button>
        <Button onClick={() => setChar("red13")}>Red XIII</Button>
        <Button onClick={() => setChar("caitsith")}>Cait Sith</Button>
        <Button onClick={() => setChar("vincent")}>Vincent</Button>
        <Button onClick={() => setChar("all")}>All</Button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Button onClick={() => setSpinX(() => !spinX)}>
          Spin X: {spinX.toString()}
        </Button>
        <Button onClick={() => setSpinY(() => !spinY)}>
          Spin Y: {spinY.toString()}
        </Button>
        <Button onClick={() => setSpinZ(() => !spinZ)}>
          Spin Z: {spinZ.toString()}
        </Button>
        <p>Spotlight intensity:</p>
        <input {...sliderProps} />
        {char !== "all" && (
          <>
            <p>X position:</p>
            <input {...xProps} />
            <p>Y position:</p>
            <input {...yProps} />
          </>
        )}
        <p>Z position:</p>
        <input {...zProps} />
      </div>
      <Canvas
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "white",
          width: "90vw",
          height: "70vh",
          backgroundImage: "linear-gradient(315deg,#0053ad,#001b85,#000223)",
        }}
        camera={{ position: [0, 0, 6] }}
      >
        <OrbitControls position={[1000, 0, 1000]} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          decay={0}
          intensity={sliderProps.value}
          color={"white"}
        />
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        {char === "all" && (
          <>
            <Model
              character={"cloud"}
              position={[-1, 0, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
            <Model
              character={"sephiroth"}
              position={[1, 0, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
            <Model
              character={"red13"}
              position={[2, 2, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
            <Model
              character={"tifa"}
              position={[0, 2, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
            <Model
              character={"aerith"}
              position={[-2, 2, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
            <Model
              character={"barret"}
              position={[0, -2, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
            <Model
              character={"caitsith"}
              position={[-2, -2, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
            <Model
              character={"vincent"}
              position={[2, -2, zProps.value]}
              spinX={spinX}
              spinY={spinY}
              spinZ={spinZ}
            />
          </>
        )}
        {char !== "all" && (
          <Model
            character={char}
            position={[xProps.value, yProps.value, zProps.value]}
            spinX={spinX}
            spinY={spinY}
            spinZ={spinZ}
          />
        )}
      </Canvas>
    </div>
  );
}

const Button = styled.button`
  font-size: 32px;
  margin: 8px;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
`;

export default App;
