import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Mars() {
  const data = useContext(DataContext);
  const Mars = data.find((item) => item.name === "Mars");

  return (
    <Planet
      planetImg={Mars?.images.planet}
      planetName={Mars?.name}
      planetOverview={Mars?.overview.content}
      planetSource={Mars?.overview.source}
      planetRotationTime={Mars?.rotation}
      planetRevolutionTime={Mars?.revolution}
      planetRadius={Mars?.radius}
      planetTemp={Mars?.temperature}
      planetStructure={Mars?.structure.content}
      planetGeology={Mars?.geology.content}
      planetStructureSource={Mars?.structure.source}
      planetGeologySource={Mars?.geology.source}
      planetInternal={Mars?.images.internal}
      planetGeologyImg={Mars?.images.geology}
    />
  );
}
