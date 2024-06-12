import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Uranus() {
  const data = useContext(DataContext);
  const Uranus = data.find((item) => item.name === "Uranus");

  return (
    <Planet
      planetImg={Uranus?.images.planet}
      planetName={Uranus?.name}
      planetOverview={Uranus?.overview.content}
      planetSource={Uranus?.overview.source}
      planetRotationTime={Uranus?.rotation}
      planetRevolutionTime={Uranus?.revolution}
      planetRadius={Uranus?.radius}
      planetTemp={Uranus?.temperature}
      planetStructure={Uranus?.structure.content}
      planetGeology={Uranus?.geology.content}
      planetStructureSource={Uranus?.structure.source}
      planetGeologySource={Uranus?.geology.source}
      planetInternal={Uranus?.images.internal}
      planetGeologyImg={Uranus?.images.geology}
      buttonBackgroundColor="#1EC1A2"
    />
  );
}
