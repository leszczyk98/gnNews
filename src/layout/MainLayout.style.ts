import styled from "styled-components";
import FooterComponent from "../components/Footer";
import TopBarComponent from "../components/TopBar";
import SideMenuComponent from "../components/SideMenu";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100svh;
`;

export const TopBar = styled(TopBarComponent)`
`

export const SideMenu = styled(SideMenuComponent)`
`;

export const Footer = styled(FooterComponent)`
`;

export const Main = styled.div`
  display: flex;
  height: calc(100svh - 200px);
  @media only screen and (max-width: 600px) {
    height: calc(100svh - 100px);
  }
`;
