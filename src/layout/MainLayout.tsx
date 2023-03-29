import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Main, SideMenu, TopBar, Wrapper } from './MainLayout.style'

const MainLayout = () => (
  <Wrapper>
    <TopBar />
    <SideMenu />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </Wrapper>
)

export default MainLayout
