import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Mercury() {
  const data = useContext(DataContext);
  const Mercury = data.find((item) => item.name === "Mercury");

  return (
    <Planet
      planetImg={Mercury?.images.planet}
      planetName={Mercury?.name}
      planetOverview={Mercury?.overview.content}
      planetSource={Mercury?.overview.source}
      planetRotationTime={Mercury?.rotation}
      planetRevolutionTime={Mercury?.revolution}
      planetRadius={Mercury?.radius}
      planetTemp={Mercury?.temperature}
      planetStructure={Mercury?.structure.content}
      planetGeology={Mercury?.geology.content}
      planetStructureSource={Mercury?.structure.source}
      planetGeologySource={Mercury?.geology.source}
      planetInternal={Mercury?.images.internal}
      planetGeologyImg={Mercury?.images.geology}
    />
  );
}
