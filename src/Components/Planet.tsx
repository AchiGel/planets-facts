import styled from "styled-components";
import sourceIcon from "/assets/icon-source.svg";
import { useState } from "react";

type ButtonProps = {
  bbc: string;
};

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
  font-family: "Antonio", sans-serif;
  font-size: 80px;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 23px;
  @media screen and (max-width: 800px) {
    font-size: 48px;
  }
`;

const PlanetAsideDescr = styled.p`
  color: #fff;
  font-family: "League Spartan", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 24px;
  @media screen and (max-width: 800px) {
    font-size: 11px;
  }
`;

const PlanetSource = styled.span`
  display: inline-block;
  color: #fff;
  font-family: "League Spartan", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
  margin-bottom: 39px;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    align-items: center;

    img {
      margin-left: 8px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoButton = styled.button<ButtonProps>`
  text-align: left;
  padding: 12px 28px;
  background-color: transparent;
  color: white;
  border: 1px solid #ffffff21;
  font-family: "League Spartan", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2.571px;
  text-transform: uppercase;

  &:hover {
    background-color: #d8d8d822;
    border: 1px solid transparent;
    cursor: pointer;
  }
  &:active,
  &:focus {
    background-color: ${(props) => props.bbc};
    border: 1px solid transparent;
  }

  span {
    padding-right: 28px;
    opacity: 0.5;
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
  transform: translateX(-50%);
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
  font-family: "League Spartan", sans-serif;
  font-size: 11px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
`;

const PlanetFooterBoxContent = styled.span`
  color: #fff;
  font-family: "Antonio", sans-serif;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: -1.5px;
  text-transform: uppercase;
  @media screen and (max-width: 1045px) {
    font-size: 24px;
  }
`;

type PlanetProps = {
  planetImg?: string;
  planetName?: string;
  planetOverview?: string;
  planetSource?: string;
  planetRotationTime?: string;
  planetRevolutionTime?: string;
  planetRadius?: string;
  planetTemp?: string;
  planetStructure?: string;
  planetGeology?: string;
  planetStructureSource?: string;
  planetGeologySource?: string;
  planetInternal?: string;
  planetGeologyImg?: string;
  buttonBackgroundColor: string;
};

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
  buttonBackgroundColor,
}: PlanetProps) {
  const [selected, setSelected] = useState(0);

  function selectedContent() {
    if (selected === 0) return planetOverview;
    if (selected === 1) return planetStructure;
    return planetGeology;
  }

  function selectedSource() {
    if (selected === 0) return planetSource;
    if (selected === 1) return planetStructureSource;
    return planetGeologySource;
  }

  function selectedImg() {
    if (selected === 0) return planetImg;
    if (selected === 1) return planetInternal;
    return planetImg;
  }

  return (
    <PlanetCont>
      <PlanetMain>
        <PlanetImages>
          <PlanetImage src={selectedImg()} alt={`${planetName} image`} />
          {selected === 2 && (
            <PlanetGeologyImg
              src={planetGeologyImg}
              alt={`${planetName} geology image`}
            />
          )}
        </PlanetImages>

        <PlanetAside>
          <div style={{ width: "50%" }}>
            <PlanetAsideTitle>{planetName}</PlanetAsideTitle>
            <PlanetAsideDescr>{selectedContent()}</PlanetAsideDescr>
            <PlanetSource>
              Source:{" "}
              <a
                href={selectedSource()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia <img src={sourceIcon} alt="source icon" />
              </a>
            </PlanetSource>
          </div>
          <Buttons>
            <InfoButton
              bbc={buttonBackgroundColor}
              onClick={() => setSelected(0)}
            >
              <span>01</span> OVERVIEW
            </InfoButton>
            <InfoButton
              bbc={buttonBackgroundColor}
              onClick={() => setSelected(1)}
            >
              <span>02</span> Internal Structure
            </InfoButton>
            <InfoButton
              bbc={buttonBackgroundColor}
              onClick={() => setSelected(2)}
            >
              <span>03</span> Surface Geology
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
          <PlanetFooterBoxTitle>RADIUS</PlanetFooterBoxTitle>
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
