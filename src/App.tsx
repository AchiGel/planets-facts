import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import styled from "styled-components";
import DATA from "./data.json";
import { createContext, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface dataTypes {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

export const DataContext = createContext<dataTypes[]>([]);

function App() {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <DataContext.Provider value={DATA}>
      <Wrapper>
        <Header dropMenu={dropMenu} setDropMenu={setDropMenu} />
        <Outlet />
      </Wrapper>
    </DataContext.Provider>
  );
}

export default App;
