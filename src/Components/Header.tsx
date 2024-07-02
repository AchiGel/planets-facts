import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type dropMenuType = {
  dropMenu: boolean;
};

const HeaderComp = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  padding: 0 41px 0 32px;
  border-bottom: 1px solid #ffffff24;
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
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const HeaderNavigation = styled.ul<dropMenuType>`
  display: flex;
  list-style: none;
  gap: 33px;
  @media screen and (max-width: 600px) {
    display: ${(props: dropMenuType) => (props.dropMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 113px;
    left: 24px;
    gap: 0;
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
  font-style: normal;
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
`;

const PlanetIconTitle = styled.div`
  display: flex;
  gap: 25px;
`;

export default function Header() {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <HeaderComp>
      <HeaderLogo>THE PLANETS</HeaderLogo>
      <HeaderNavigation dropMenu={dropMenu}>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#DEF4FC"></PlanetIcon>}
            <Link to="mercury">mercury</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#F7CC7F"></PlanetIcon>}
            <Link to="venus">venus</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#545BFE"></PlanetIcon>}
            <Link to="earth">earth</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#FF6A45"></PlanetIcon>}
            <Link to="mars">mars</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#ECAD7A"></PlanetIcon>}
            <Link to="jupiter">jupiter</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#FCCB6B"></PlanetIcon>}
            <Link to="saturn">saturn</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#65F0D5"></PlanetIcon>}
            <Link to="uranus">uranus</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <PlanetIconTitle>
            {dropMenu && <PlanetIcon color="#497EFA"></PlanetIcon>}
            <Link to="neptune">neptune</Link>
          </PlanetIconTitle>
          <img src="assets/icon-chevron.svg" />
        </HeaderNavigationItem>
      </HeaderNavigation>
      <BurgerMenu onClick={() => setDropMenu(!dropMenu)}></BurgerMenu>
    </HeaderComp>
  );
}
