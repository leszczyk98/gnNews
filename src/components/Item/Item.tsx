import { Modal } from 'antd'
import React, { useState } from 'react'
import { ViewTypeValue } from '../../types/ViewType'
import NewsModal from '../NewsModal'
import {
  Wrapper,
  Image,
  TitleSection,
  Title,
  Description,
  ImageWrapper,
  Meta,
} from './Item.style'
import placeholderImg from '../../assets/no-image.jpg'

export interface ItemProps {
  type: ViewTypeValue
  author?: string
  title: string
  url: string
  publishedAt: Date
  desc?: string
  image?: string
  'data-testid'?: string
}

const Item = ({
  author,
  publishedAt,
  title,
  url,
  desc,
  image,
  type,
  ...props
}: ItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <>
      <Wrapper
        type={type}
        onClick={showModal}
        data-testid={props['data-testid'] || 'news-wrapper'}
      >
        <ImageWrapper type={type}>
          <Image
            src={image || placeholderImg}
            alt={title}
            data-testid={image ? 'image' : 'placeholder-image'}
          />
        </ImageWrapper>
        <TitleSection type={type}>
          <Title type={type}>{title}</Title>
          {desc && type === 'list' && (
            <Description data-testid="desc">{desc}</Description>
          )}
          <Meta type={type}>
            <span>{author}</span>
            {type === 'list' && (
              <span data-testid="date">{publishedAt.toDateString()}</span>
            )}
          </Meta>
        </TitleSection>
      </Wrapper>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        okButtonProps={{ style: { display: 'none' } }}
        centered
        data-testid="news-modal"
      >
        <NewsModal
          title={title}
          url={url}
          publishedAt={publishedAt}
          author={author}
          desc={desc}
          image={image}
        />
      </Modal>
    </>
  )
}

export default Item
