import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Link, Wrapper } from './NewsModal.style'

export interface NewsModalProps {
  title: string
  author?: string
  url: string
  publishedAt: Date
  desc?: string
  image?: string
}

const NewsModal = ({
  publishedAt,
  title,
  url,
  author,
  desc,
  image,
}: NewsModalProps) => {
  const { t } = useTranslation('modal')
  return (
    <Wrapper>
      <h4 style={{ maxWidth: '90%' }} data-testid="title">
        {title}
      </h4>
      {image ? (
        <Image src={image} data-testid="image" />
      ) : (
        <p data-testid="no-image">{t('no_image')}</p>
      )}
      <p data-testid="desc">
        {t('description')} {desc || t('missing')}
      </p>
      <Link href={url} data-testid="link">
        URL: {url}
      </Link>
      <p data-testid="author">
        {t('author')} {author || t('unknown')}
      </p>
      <p data-testid="date">
        {t('date')} {publishedAt.toDateString()}
      </p>
    </Wrapper>
  )
}

export default NewsModal
