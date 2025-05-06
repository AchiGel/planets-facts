import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

type dropMenuType = {
  $dropMenu: boolean;
  $menuHeight: number;
};

const HeaderComp = styled.header`
  position: fixed;
  z-index: 10000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  padding: 0 41px 0 32px;
  border-bottom: 1px solid #ffffff24;
  background-color: #070724;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 32px 53px 27px 51px;
    height: auto;
    gap: 39px;
  }
  @media screen and (max-width: 600px) {
    padding: 16px 24px;
    flex-direction: row;
  }
`;

const HeaderLogo = styled.h2`
  color: #fff;
  font-family: "Antonio";
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const HeaderNavigation = styled.ul<dropMenuType>`
  display: flex;
  list-style: none;
  gap: 33px;
  transition: height 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 24px;
    gap: 0;
    z-index: 1000;
    background: #070722;
    height: ${(props) => (props.$dropMenu ? `${props.$menuHeight}vh` : "0")};
    opacity: ${(props) => (props.$dropMenu ? "1" : "0")};
    transform: ${(props) =>
      props.$dropMenu ? "translateY(0)" : "translateY(-20px)"};
    overflow-y: scroll;
  }
`;

const BurgerMenu = styled.div`
  height: 24px;
  width: 24px;
  background-image: url("assets/icon-hamburger.svg");
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const HeaderNavigationItem = styled.li`
  color: #fff;
  font-family: "League Spartan";
  font-size: 11px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1.364px;
    padding: 20px 0;
    border-bottom: 1px solid #ffffff10;
    display: flex;
    width: 90vw;
    justify-content: space-between;
    align-items: center;
  }
`;

const PlanetIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const PlanetIconTitle = styled.div`
  display: flex;
  gap: 25px;
`;

const PlanetArrow = styled.img`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export default function Header({
  dropMenu,
  setDropMenu,
}: {
  dropMenu: boolean;
  setDropMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const location = useLocation();

  const planets = [
    { color: "#DEF4FC", planetName: "mercury" },
    { color: "#F7CC7F", planetName: "venus" },
    { color: "#545BFE", planetName: "earth" },
    { color: "#FF6A45", planetName: "mars" },
    { color: "#ECAD7A", planetName: "jupiter" },
    { color: "#FCCB6B", planetName: "saturn" },
    { color: "#65F0D5", planetName: "uranus" },
    { color: "#497EFA", planetName: "neptune" },
  ];

  useEffect(() => {
    setDropMenu(false);
  }, [location, setDropMenu]);

  return (
    <HeaderComp>
      <HeaderLogo>THE PLANETS</HeaderLogo>
      <nav>
        <HeaderNavigation $dropMenu={dropMenu} $menuHeight={100}>
          {planets.map((p, i) => (
            <HeaderNavigationItem key={i}>
              <PlanetIconTitle>
                <PlanetIcon color={p.color}></PlanetIcon>
                <Link to={p.planetName}>{p.planetName}</Link>
              </PlanetIconTitle>
              <PlanetArrow src="assets/icon-chevron.svg" />
            </HeaderNavigationItem>
          ))}
        </HeaderNavigation>
      </nav>

      <BurgerMenu onClick={() => setDropMenu(!dropMenu)}></BurgerMenu>
    </HeaderComp>
  );
}
