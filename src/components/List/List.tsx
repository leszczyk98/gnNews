import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { countries } from 'constants/countries'
import { fetchNews } from 'redux/slices/newsSlice'
import { Countries } from 'types/Countries'
import Item from '../Item'
import { Header, Wrapper } from './List.style'

const List = () => {
  const dispatch = useAppDispatch()
  const params = useParams()
  const { t } = useTranslation('countries')
  const viewType = useAppSelector((state) => state.viewType.value)
  const news = useAppSelector((state) => state.news.byCountry)
  const country = countries[params.country as Countries]
  const articles = news[country]?.articles || []

  useEffect(() => {
    dispatch(fetchNews(country))
  }, [country, dispatch])

  return (
    <Wrapper type={viewType} data-testid="list-wrapper">
      <Header>{t(country)}</Header>
      {articles.map((article) => (
        <Item
          data-testid="list-item"
          key={article.title}
          type={viewType}
          author={article.author}
          title={article.title}
          url={article.url}
          publishedAt={new Date(article.publishedAt)}
          image={article.urlToImage}
          desc={article.description}
        />
      ))}
    </Wrapper>
  )
}

export default List
