import { Character } from "./characters";

export const getGlb = (character: Character) => {
  switch (character) {
    case "aerith":
      return "public/models/aerith/aerith.glb";
    case "barret":
      return "public/models/barret/barret.glb";
    case "caitsith":
      return "public/models/caitsith/caitsith.glb";
    case "cloud":
      return "public/models/cloud/cloud.glb";
    case "red13":
      return "public/models/red13/red13.glb";
    case "sephiroth":
      return "public/models/sephiroth/sephiroth.glb";
    case "tifa":
      return "public/models/tifa/tifa.glb";
    case "vincent":
      return "public/models/vincent/vincent.glb";
  }
};
