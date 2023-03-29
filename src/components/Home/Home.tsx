import React from "react";
import { useTranslation } from "react-i18next";
import { Wrapper } from "./Home.style";

const Home = () => {
    const { t } = useTranslation("other")
    return <Wrapper>{t("home_page")}</Wrapper>
}

export default Home