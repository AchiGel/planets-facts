import { useContext } from "react";
import { DataContext } from "../App";
import styled from "styled-components";

const PlanetCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 126px 165px 51px;
`;

const PlanetMain = styled.main`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 87px;
`;

const PlanetAside = styled.aside`
  width: 50%;
  max-width: 165px;
`;

const PlanetImage = styled.img`
  width: 100%;
  max-width: 290px;
`;

const PlanetFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const PlanetFooterBox = styled.div`
  border: 1px solid #ffffff36;
  padding: 20px 23px 27px;
`;

export default function Earth() {
  const data = useContext(DataContext);
  const earth = data.find((item) => item.name === "Earth");

  return (
    <PlanetCont>
      <PlanetMain>
        <PlanetImage src={earth?.images.planet} />
        <PlanetAside>
          <h1>{earth?.name}</h1>
          <p>{earth?.overview.content}</p>
          <a href={earth?.overview.source}>Link</a>
        </PlanetAside>
      </PlanetMain>
      <PlanetFooter>
        <PlanetFooterBox>
          <h3>ROTATION TIME</h3>
          <h2>{earth?.rotation}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>REVOLUTION TIME</h3>
          <h2>{earth?.revolution}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>radius</h3>
          <h2>{earth?.radius}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>AVERAGE TEMP.</h3>
          <h2>{earth?.temperature}</h2>
        </PlanetFooterBox>
      </PlanetFooter>
    </PlanetCont>
  );
}
