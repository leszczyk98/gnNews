import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { countries } from "../../constants/countries";
import { fetchNews } from "../../redux/slices/newsSlice";
import { Countries } from "../../types/Countries";
import Item from "../Item";
import { Header, Wrapper } from "./List.style";

const List = () => {
    const viewType = useAppSelector((state) => state.viewType.value)
    const dispatch = useAppDispatch()
    const params = useParams()
    const country = countries[params.country as Countries]
    const newsLoading = useAppSelector(state => state.news.isLoading)
    const news = useAppSelector(state => state.news.byCountry)
    const articles = news[country]?.articles || []
    const { t } = useTranslation('countries')
    useEffect(() => {
        dispatch(fetchNews(country));
    }, [country]);
    if (newsLoading) return <div>Loading</div>
    return (
      <Wrapper type={viewType}>
        <Header>{t(country)}</Header>
        {articles.map((article, idx) => 
            <Item
            key={idx}
            type={viewType}
            author={article.author}
            title={article.title}
            url={article.url}
            publishedAt={new Date(article.publishedAt)}
            image={article.urlToImage}
            desc={article.description}
            />
        )}
      </Wrapper>
    );
}

export default List;