import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Character } from "./utils/characters";
import Model from "./components/Model";
import styled from "styled-components";

function App() {
  const [char, setChar] = useState("cloud" as Character | "all");

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
      <Canvas
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "white",
          width: "50vw",
          height: "70vh",
          backgroundImage: "linear-gradient(315deg,#0053ad,#001b85,#000223)",
        }}
        camera={{ position: [0, 0, 6] }}
      >
        <OrbitControls />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
          color={"blue"}
        />
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        {char === "all" && (
          <>
            <Model position={[-1, 0, 0]} character={"cloud"} />
            <Model position={[1, 0, 0]} character={"sephiroth"} />
            <Model position={[2, 2, 0]} character={"red13"} />
            <Model position={[0, 2, 0]} character={"tifa"} />
            <Model position={[-2, 2, 0]} character={"aerith"} />
            <Model position={[0, -2, 0]} character={"barret"} />
            <Model position={[-2, -2, 0]} character={"caitsith"} />
            <Model position={[2, -2, 0]} character={"vincent"} />
          </>
        )}
        {char !== "all" && <Model position={[0, 0, 0]} character={char} />}
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
