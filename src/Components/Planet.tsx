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
