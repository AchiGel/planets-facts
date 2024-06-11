import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Venus() {
  const data = useContext(DataContext);
  const Venus = data.find((item) => item.name === "Venus");

  return (
    <Planet
      planetImg={Venus?.images.planet}
      planetName={Venus?.name}
      planetOverview={Venus?.overview.content}
      planetSource={Venus?.overview.source}
      planetRotationTime={Venus?.rotation}
      planetRevolutionTime={Venus?.revolution}
      planetRadius={Venus?.radius}
      planetTemp={Venus?.temperature}
    />
  );
}
