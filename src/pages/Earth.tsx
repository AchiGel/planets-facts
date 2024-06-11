import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Earth() {
  const data = useContext(DataContext);
  const Earth = data.find((item) => item.name === "Earth");

  return (
    <Planet
      planetImg={Earth?.images.planet}
      planetName={Earth?.name}
      planetOverview={Earth?.overview.content}
      planetSource={Earth?.overview.source}
      planetRotationTime={Earth?.rotation}
      planetRevolutionTime={Earth?.revolution}
      planetRadius={Earth?.radius}
      planetTemp={Earth?.temperature}
    />
  );
}
