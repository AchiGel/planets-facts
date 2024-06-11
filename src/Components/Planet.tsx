import styled from "styled-components";
import sourceIcon from "/assets/icon-source.svg";

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
  color: #fff;
  font-family: "League Spartan";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 178.571% */
  opacity: 0.5;
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

export default function Planet({
  planetImg,
  planetName,
  planetOverview,
  planetSource,
  planetRotationTime,
  planetRevolutionTime,
  planetRadius,
  planetTemp,
}: {
  planetImg: string | undefined;
  planetName: string | undefined;
  planetOverview: string | undefined;
  planetSource: string | undefined;
  planetRotationTime: string | undefined;
  planetRevolutionTime: string | undefined;
  planetRadius: string | undefined;
  planetTemp: string | undefined;
}) {
  return (
    <PlanetCont>
      <PlanetMain>
        <PlanetImage src={planetImg} />
        <PlanetAside>
          <PlanetAsideTitle>{planetName}</PlanetAsideTitle>
          <PlanetAsideDescr>{planetOverview}</PlanetAsideDescr>
          <PlanetSource>
            Source :{" "}
            <a href={planetSource} target="_blank">
              Wikipedia <img src={sourceIcon} />
            </a>
          </PlanetSource>
        </PlanetAside>
      </PlanetMain>
      <PlanetFooter>
        <PlanetFooterBox>
          <h3>ROTATION TIME</h3>
          <h2>{planetRotationTime}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>REVOLUTION TIME</h3>
          <h2>{planetRevolutionTime}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>radius</h3>
          <h2>{planetRadius}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>AVERAGE TEMP.</h3>
          <h2>{planetTemp}</h2>
        </PlanetFooterBox>
      </PlanetFooter>
    </PlanetCont>
  );
}
