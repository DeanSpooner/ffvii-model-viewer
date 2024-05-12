import { Character } from "./characters";

export const getGlb = (character: Character) => {
  switch (character) {
    case "aerith":
      return "models/aerith/aerith.glb";
    case "barret":
      return "models/barret/barret.glb";
    case "caitsith":
      return "models/caitsith/caitsith.glb";
    case "cloud":
      return "models/cloud/cloud.glb";
    case "red13":
      return "models/red13/red13.glb";
    case "sephiroth":
      return "models/sephiroth/sephiroth.glb";
    case "tifa":
      return "models/tifa/tifa.glb";
    case "vincent":
      return "models/vincent/vincent.glb";
  }
};
