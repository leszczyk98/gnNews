import React, { useEffect } from 'react'
import { countries } from '../../constants/countries'
import { flagMap } from './flagMap'
import { Countries } from '../../types/Countries'
import {
  Country,
  CountryList,
  Flag,
  Link,
  Sticky,
  Wrapper,
} from './SideMenu.style'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { closeDrawer } from '../../redux/slices/drawerSlice'
import { useTranslation } from 'react-i18next'

interface SideMenuProps {
  className?: string
}

const SideMenu = ({ className }: SideMenuProps) => {
  const drawerVisible = useAppSelector((state) => state.drawer.open)
  const dispatch = useAppDispatch()
  const { t } = useTranslation('countries')
  useEffect(() => {
    if (drawerVisible) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [drawerVisible])
  return (
    <Wrapper
      visible={drawerVisible}
      className={className}
      data-testid="wrapper"
    >
      <Sticky>
        <CountryList>
          {Object.keys(countries).map((country) => (
            <Country
              key={country}
              onClick={() => dispatch(closeDrawer())}
              data-testid="country"
            >
              <Link to={`/country/${country}`}>
                <Flag>{flagMap[country as Countries]}</Flag>
                <p>{t(countries[country as Countries])}</p>
              </Link>
            </Country>
          ))}
        </CountryList>
      </Sticky>
    </Wrapper>
  )
}

export default SideMenu
