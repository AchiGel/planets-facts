import { useContext } from "react";
import { DataContext } from "../App";

export default function Mars() {
  const data = useContext(DataContext);
  const mars = data.find((item) => item.name === "Mars");
  console.log(mars);
  return <div>Mars</div>;
}
