import { Popover } from 'antd'
import React from 'react'
import {
  Actions,
  Main,
  Title,
  Wrapper,
  Text,
  ButtonGroup,
  Icon,
  IconButton,
  Separator,
  Button,
} from './TopBar.style'
import { ReactComponent as List } from '../../assets/list.svg'
import { ReactComponent as Grid } from '../../assets/grid.svg'
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg'
import { ReactComponent as Close } from '../../assets/close.svg'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeType } from '../../redux/slices/viewTypeSlice'
import { useNavigate } from 'react-router-dom'
import { toggleDrawer } from '../../redux/slices/drawerSlice'
import { useTranslation } from 'react-i18next'

interface TopBarProps {
  className?: string
}

const TopBar = ({ className }: TopBarProps) => {
  const dispatch = useAppDispatch()
  const viewType = useAppSelector((state) => state.viewType.value)
  const drawerVisible = useAppSelector((state) => state.drawer.open)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation('other')
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }
  return (
    <Wrapper className={className}>
      <Main>
        <Icon onClick={() => dispatch(toggleDrawer())} data-testid="hamburger">
          {drawerVisible ? <Close /> : <Hamburger />}
        </Icon>
        <Title onClick={() => navigate('/')}>gnNews</Title>
      </Main>
      <Actions>
        <Popover
          content={
            <p style={{ width: '400px' }}>
              Na początku miałem mały problem z Reduxem poniewaz przez ostatnich
              kilka miesięcy nie pracowałem z nim, jednak aplikacja nie była specjalnie
              trudna i obyło się bez większych problemów na szczęście :D
              Największą frajdę oraz satysfakcję miałem w momencie jak podpięcie
              do API wraz z Reduxem działało i mogłem zobaczyć efekty, zmienić widok, obecny kraj.
            </p>
          }
          trigger="click"
          placement="bottom"
        >
          <Button>{t('click')}</Button>
        </Popover>
        <Separator />
        <ButtonGroup hideOnMobile data-testid="view-type-buttons">
          <IconButton
            onClick={() => dispatch(changeType('list'))}
            active={viewType === 'list'}
          >
            <List />
          </IconButton>
          <IconButton
            onClick={() => dispatch(changeType('grid'))}
            active={viewType === 'grid'}
          >
            <Grid />
          </IconButton>
        </ButtonGroup>
        <Separator />
        <ButtonGroup data-testid="language-buttons">
          <IconButton
            active={i18n.language === 'pl'}
            onClick={() => handleLanguageChange('pl')}
          >
            <Text>PL</Text>
          </IconButton>
          <IconButton
            active={i18n.language === 'en'}
            onClick={() => handleLanguageChange('en')}
          >
            <Text>EN</Text>
          </IconButton>
        </ButtonGroup>
      </Actions>
    </Wrapper>
  )
}

export default TopBar
