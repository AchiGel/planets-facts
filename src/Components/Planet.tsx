import styled from "styled-components";
import sourceIcon from "/assets/icon-source.svg";
import { useState } from "react";

const PlanetCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 165px 51px;
`;

const PlanetMain = styled.main`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 87px;
`;

const PlanetAside = styled.aside`
  width: 50%;
  max-width: 350px;
`;

const PlanetAsideTitle = styled.h1`
  color: #fff;
  font-family: "Antonio";
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 23px;
`;

const PlanetAsideDescr = styled.p`
  color: #fff;
  font-family: "League Spartan";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
  margin-bottom: 24px;
`;

const PlanetSource = styled.span`
  display: inline-block;
  color: #fff;
  font-family: "League Spartan";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
  opacity: 0.5;
  margin-bottom: 39px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PlanetImage = styled.img`
  margin-left: 10%;
  max-width: 45%;
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

const PlanetFooterBoxTitle = styled.h4`
  color: #fff;
  font-family: "League Spartan";
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
`;

const PlanetFooterBoxContent = styled.span`
  color: #fff;
  font-family: "Antonio";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.5px;
  text-transform: uppercase;
`;

export default function Planet({
  planetImg,
  planetName,
  planetOverview,
  planetSource,
  planetRotationTime,
  planetRevolutionTime,
  planetRadius,
  planetTemp,
  planetStructure,
  planetGeology,
  planetStructureSource,
  planetGeologySource,
  planetInternal,
  planetGeologyImg,
}: {
  planetImg: string | undefined;
  planetName: string | undefined;
  planetOverview: string | undefined;
  planetSource: string | undefined;
  planetRotationTime: string | undefined;
  planetRevolutionTime: string | undefined;
  planetRadius: string | undefined;
  planetTemp: string | undefined;
  planetStructure: string | undefined;
  planetGeology: string | undefined;
  planetStructureSource: string | undefined;
  planetGeologySource: string | undefined;
  planetInternal: string | undefined;
  planetGeologyImg: string | undefined;
}) {
  const [selected, setSelected] = useState(0);

  function selectedContent() {
    if (selected === 0) {
      return planetOverview;
    } else if (selected === 1) {
      return planetStructure;
    }
    return planetGeology;
  }

  function selectedSource() {
    if (selected === 0) {
      return planetSource;
    } else if (selected === 1) {
      return planetStructureSource;
    }
    return planetGeologySource;
  }

  function selectedImg() {
    if (selected === 0) {
      return planetImg;
    } else if (selected === 1) {
      return planetInternal;
    }
    return planetGeologyImg;
  }

  return (
    <PlanetCont>
      <PlanetMain>
        <PlanetImage src={selectedImg()} />
        <PlanetAside>
          <PlanetAsideTitle>{planetName}</PlanetAsideTitle>
          <PlanetAsideDescr>{selectedContent()}</PlanetAsideDescr>
          <PlanetSource>
            Source :{" "}
            <a href={selectedSource()} target="_blank">
              Wikipedia <img src={sourceIcon} />
            </a>
          </PlanetSource>
          <Buttons>
            <button
              onClick={() => {
                setSelected(0);
              }}
            >
              01
            </button>
            <button
              onClick={() => {
                setSelected(1);
              }}
            >
              02
            </button>
            <button
              onClick={() => {
                setSelected(2);
              }}
            >
              03
            </button>
          </Buttons>
        </PlanetAside>
      </PlanetMain>
      <PlanetFooter>
        <PlanetFooterBox>
          <PlanetFooterBoxTitle>ROTATION TIME</PlanetFooterBoxTitle>
          <PlanetFooterBoxContent>{planetRotationTime}</PlanetFooterBoxContent>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <PlanetFooterBoxTitle>REVOLUTION TIME</PlanetFooterBoxTitle>
          <PlanetFooterBoxContent>
            {planetRevolutionTime}
          </PlanetFooterBoxContent>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <PlanetFooterBoxTitle>radius</PlanetFooterBoxTitle>
          <PlanetFooterBoxContent>{planetRadius}</PlanetFooterBoxContent>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <PlanetFooterBoxTitle>AVERAGE TEMP.</PlanetFooterBoxTitle>
          <PlanetFooterBoxContent>{planetTemp}</PlanetFooterBoxContent>
        </PlanetFooterBox>
      </PlanetFooter>
    </PlanetCont>
  );
}
