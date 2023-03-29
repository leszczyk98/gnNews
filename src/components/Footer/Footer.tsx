import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import { countries } from '../../constants/countries'
import { Countries } from '../../types/Countries'
import { Wrapper } from './Footer.style'

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const [date, setDate] = useState(new Date())
  const params = useParams()
  const country = countries[params.country as Countries]
  const news = useAppSelector((state) => state.news.byCountry)
  const newsLoading = useAppSelector((state) => state.news.isLoading)
  const { t } = useTranslation('other')

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <Wrapper className={className}>
      <p data-testid="time">{date.toLocaleTimeString()}</p>
      {country && (
        <p data-testid="counter">
          {newsLoading
            ? 'Loading'
            : t('articles', { count: news[country]?.totalArticles || 0 })}
        </p>
      )}
    </Wrapper>
  )
}

export default Footer
