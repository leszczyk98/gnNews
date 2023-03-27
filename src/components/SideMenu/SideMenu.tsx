import React from "react";
import { countries } from "../../constants/countries";
import { flagMap } from "./flagMap";
import { Countries } from "../../types/Countries";
import { Country, CountryList, Flag, Link, Wrapper } from "./SideMenu.style";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeDrawer } from "../../redux/slices/drawerSlice";
import { useTranslation } from "react-i18next";

const SideMenu = () => {
  const drawerVisible = useAppSelector((state) => state.drawer.value);
  const dispatch = useAppDispatch()
  const { t } = useTranslation('countries')
  return (
    <Wrapper visible={drawerVisible}>
      <CountryList>
        {Object.keys(countries).map((country, idx) => (
          <Country key={idx} onClick={() => dispatch(closeDrawer())}>
            <Link to={`/country/${country}`}>
              <Flag>{flagMap[country as Countries]}</Flag>
              <p>{t(countries[country as Countries])}</p>
            </Link>
          </Country>
        ))}
      </CountryList>
    </Wrapper>
  );
};

export default SideMenu;
