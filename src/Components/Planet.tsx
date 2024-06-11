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

export default function Planet({
  planetImg,
  planetName,
  planetOverview,
}: {
  planetImg: string | undefined;
  planetName: string | undefined;
  planetOverview: string | undefined;
}) {
  return (
    <PlanetCont>
      <PlanetMain>
        <PlanetImage src={planetImg} />
        <PlanetAside>
          <h1>{planetName}</h1>
          <p>{planetOverview}</p>
        </PlanetAside>
      </PlanetMain>
      <PlanetFooter>
        <PlanetFooterBox>
          <h3>ROTATION TIME</h3>
          <h2>{planetImg}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>REVOLUTION TIME</h3>
          <h2>{planetImg}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>radius</h3>
          <h2>{planetImg}</h2>
        </PlanetFooterBox>
        <PlanetFooterBox>
          <h3>AVERAGE TEMP.</h3>
          <h2>{planetImg}</h2>
        </PlanetFooterBox>
      </PlanetFooter>
    </PlanetCont>
  );
}
