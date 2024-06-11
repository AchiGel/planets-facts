import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Jupiter() {
  const data = useContext(DataContext);
  const Jupiter = data.find((item) => item.name === "Jupiter");

  return (
    <Planet
      planetImg={Jupiter?.images.planet}
      planetName={Jupiter?.name}
      planetOverview={Jupiter?.overview.content}
      planetSource={Jupiter?.overview.source}
      planetRotationTime={Jupiter?.rotation}
      planetRevolutionTime={Jupiter?.revolution}
      planetRadius={Jupiter?.radius}
      planetTemp={Jupiter?.temperature}
    />
  );
}
