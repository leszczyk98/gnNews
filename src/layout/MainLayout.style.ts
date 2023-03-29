import styled from 'styled-components'
import FooterComponent from '../components/Footer'
import TopBarComponent from '../components/TopBar'
import SideMenuComponent from '../components/SideMenu'

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'navbar navbar'
    'sidemenu main'
    'footer footer';
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr 100px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1024px) {
    grid-template-areas:
      'navbar'
      'main'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 100px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-areas:
      'navbar'
      'main'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;
  }
`

export const TopBar = styled(TopBarComponent)`
  grid-area: navbar;
  position: sticky;
  top: 0;
`

export const SideMenu = styled(SideMenuComponent)`
  grid-area: sidemenu;
  height: 100%;
`

export const Footer = styled(FooterComponent)`
  grid-area: footer;
`

export const Main = styled.div`
  grid-area: main;
  height: 100%;
`
