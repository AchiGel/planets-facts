import { useContext } from "react";
import { DataContext } from "../App";
import Planet from "../Components/Planet";

export default function Jupiter() {
  const data = useContext(DataContext);
  const jupiter = data.find((item) => item.name === "Jupiter");
  console.log(jupiter);
  return (
    <Planet
      planetImg={jupiter?.images.planet}
      planetName={jupiter?.name}
      planetOverview={jupiter?.overview.content}
    />
  );
}
