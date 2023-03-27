import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { countries } from "../../constants/countries";
import { Countries } from "../../types/Countries";
import { Wrapper } from "./Footer.style";

const Footer = () => {
    const [date, setDate] = useState(new Date())
    const params = useParams();
    const country = countries[params.country as Countries];
    const news = useAppSelector(state => state.news.byCountry)
    const newsLoading = useAppSelector((state) => state.news.isLoading);
    const { t } = useTranslation("other")

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timerId)
    }, [])

    return (
      <Wrapper>
        <p>{date.toLocaleTimeString()}</p>
        {country && (
          <p>
            {newsLoading
              ? "Loading"
              : t("articles", { count: news[country]?.totalArticles })}
          </p>
        )}
      </Wrapper>
    );
}

export default Footer