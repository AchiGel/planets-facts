import styled from "styled-components";
import sourceIcon from "/assets/icon-source.svg";
import { useState } from "react";

const PlanetCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 165px 51px;
  @media screen and (max-width: 1045px) {
    padding: 16px 39px 36px;
  }
`;

const PlanetMain = styled.main`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 87px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 27px;
  }
`;

const PlanetAside = styled.aside`
  width: 50%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: none;
    align-items: center;
  }
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
  @media screen and (max-width: 800px) {
    font-size: 48px;
  }
`;

const PlanetAsideDescr = styled.p`
  color: #fff;
  font-family: "League Spartan";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
  margin-bottom: 24px;
  @media screen and (max-width: 800px) {
    font-size: 11px;
  }
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

const InfoButton = styled.button`
  padding: 12px 28px;
  background-color: transparent;
  color: white;
  border: 1px solid #fff;
  &:hover {
    background-color: #d8d8d822;
    border: none;
    cursor: pointer;
  }
`;

const PlanetImage = styled.img`
  max-width: 40vw;
`;

const PlanetImages = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    min-height: 460px;
  }
`;

const PlanetGeologyImg = styled.img`
  width: 160px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
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
  @media screen and (max-width: 1045px) {
    padding: 16px 15px 18px;
  }
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
  @media screen and (max-width: 1045px) {
    font-size: 24px;
  }
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
    return planetImg;
  }

  return (
    <PlanetCont>
      <PlanetMain>
        <PlanetImages>
          <PlanetImage src={selectedImg()} />
          <PlanetGeologyImg
            src={selected === 2 ? planetGeologyImg : undefined}
          />
        </PlanetImages>

        <PlanetAside>
          <div style={{ width: "50%" }}>
            <PlanetAsideTitle>{planetName}</PlanetAsideTitle>
            <PlanetAsideDescr>{selectedContent()}</PlanetAsideDescr>
            <PlanetSource>
              Source :{" "}
              <a href={selectedSource()} target="_blank">
                Wikipedia <img src={sourceIcon} />
              </a>
            </PlanetSource>
          </div>
          <Buttons>
            <InfoButton
              onClick={() => {
                setSelected(0);
              }}
            >
              01
            </InfoButton>
            <InfoButton
              onClick={() => {
                setSelected(1);
              }}
            >
              02
            </InfoButton>
            <InfoButton
              onClick={() => {
                setSelected(2);
              }}
            >
              03
            </InfoButton>
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
