import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Saturn() {
  const data = useContext(DataContext);
  const Saturn = data.find((item) => item.name === "Saturn");

  return (
    <Planet
      planetImg={Saturn?.images.planet}
      planetName={Saturn?.name}
      planetOverview={Saturn?.overview.content}
      planetSource={Saturn?.overview.source}
      planetRotationTime={Saturn?.rotation}
      planetRevolutionTime={Saturn?.revolution}
      planetRadius={Saturn?.radius}
      planetTemp={Saturn?.temperature}
      planetStructure={Saturn?.structure.content}
      planetGeology={Saturn?.geology.content}
      planetStructureSource={Saturn?.structure.source}
      planetGeologySource={Saturn?.geology.source}
      planetInternal={Saturn?.images.internal}
      planetGeologyImg={Saturn?.images.geology}
    />
  );
}
