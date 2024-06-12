import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Neptune() {
  const data = useContext(DataContext);
  const Neptune = data.find((item) => item.name === "Neptune");

  return (
    <Planet
      planetImg={Neptune?.images.planet}
      planetName={Neptune?.name}
      planetOverview={Neptune?.overview.content}
      planetSource={Neptune?.overview.source}
      planetRotationTime={Neptune?.rotation}
      planetRevolutionTime={Neptune?.revolution}
      planetRadius={Neptune?.radius}
      planetTemp={Neptune?.temperature}
      planetStructure={Neptune?.structure.content}
      planetGeology={Neptune?.geology.content}
      planetStructureSource={Neptune?.structure.source}
      planetGeologySource={Neptune?.geology.source}
      planetInternal={Neptune?.images.internal}
      planetGeologyImg={Neptune?.images.geology}
      buttonBackgroundColor="#2D68F0"
    />
  );
}
