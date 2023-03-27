import { Button } from "antd";
import React from "react";
import {
  Actions,
  Main,
  Title,
  Wrapper,
  Text,
  Views,
  IconPrimary,
  IconSecondary,
} from "./TopBar.style";
import { ReactComponent as List } from "../../assets/list.svg";
import { ReactComponent as Grid } from "../../assets/grid.svg";
import { ReactComponent as Hamburger } from "../../assets/hamburger.svg";
import { ReactComponent as Close } from "../../assets/close.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeType } from "../../redux/slices/viewTypSlice";
import { useNavigate } from "react-router-dom";
import { toggleDrawer } from "../../redux/slices/drawerSlice";
import { useTranslation } from "react-i18next";

const TopBar = () => {
  const dispatch = useAppDispatch();
  const viewType = useAppSelector((state) => state.viewType.value);
  const drawerVisible = useAppSelector((state) => state.drawer.value);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("other")
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("language", lang)
  }
  return (
    <Wrapper>
      <Main>
        <IconPrimary onClick={() => dispatch(toggleDrawer())}>
          {drawerVisible ? <Close /> : <Hamburger />}
        </IconPrimary>
        <Title onClick={() => navigate("/")}>gnNews</Title>
      </Main>
      <Actions>
        <Button>{t("click")}</Button>
        <Views>
          <Text>{t("view")}</Text>
          <IconSecondary
            onClick={() => dispatch(changeType("list"))}
            active={viewType === "list"}
          >
            <List />
          </IconSecondary>
          <IconSecondary
            onClick={() => dispatch(changeType("grid"))}
            active={viewType === "grid"}
          >
            <Grid />
          </IconSecondary>
        </Views>
        <Views>
          <Text>|</Text>
          <Text onClick={() => handleLanguageChange("pl")}>PL</Text>
          <Text onClick={() => handleLanguageChange("en")}>EN</Text>
        </Views>
      </Actions>
    </Wrapper>
  );
};

export default TopBar;
