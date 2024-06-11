import { Link } from "react-router-dom";
import styled from "styled-components";

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

const HeaderNavigation = styled.ul`
  display: flex;
  list-style: none;
  gap: 33px;
`;

const HeaderNavigationItem = styled.li`
  color: #fff;
  font-family: "League Spartan";
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 227.273% */
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default function Header() {
  return (
    <HeaderComp>
      <HeaderLogo>THE PLANETS</HeaderLogo>
      <HeaderNavigation>
        <HeaderNavigationItem>
          <Link to="mercury">mercury</Link>
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <Link to="venus">venus</Link>
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <Link to="earth">earth</Link>
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <Link to="mars">mars</Link>
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <Link to="jupiter">jupiter</Link>
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <Link to="saturn">saturn</Link>
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <Link to="uranus">uranus</Link>
        </HeaderNavigationItem>
        <HeaderNavigationItem>
          <Link to="neptune">neptune</Link>
        </HeaderNavigationItem>
      </HeaderNavigation>
    </HeaderComp>
  );
}
