import styled from 'styled-components'
import { ViewTypeValue } from '../../types/ViewType'

export const Wrapper = styled.div<{ type: ViewTypeValue }>`
  padding: 16px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  flex-direction: ${({ type }) => (type === 'grid' ? 'column' : 'initial')};
  width: ${({ type }) => (type === 'list' ? '100%' : 'initial')};
  max-width: ${({ type }) => (type === 'grid' ? '400px' : 'initial')};
  min-height: ${({ type }) => (type === 'list' ? '120px' : '320px')};
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgb(3, 3, 3, 0.2);
  background-color: #fff;
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: auto;
    max-width: 400px;
    min-height: 320px;
  }
`

export const TitleSection = styled.div<{ type: ViewTypeValue }>`
  margin-top: ${({ type }) => (type === 'grid' ? '12px' : 'initial')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 6px;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    margin-top: 12px;
  }
`

export const Title = styled.h3<{ type: ViewTypeValue }>`
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: ${({ type }) => (type === 'list' ? 1 : 3)};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 22px;

  @media only screen and (max-width: 600px) {
    -webkit-line-clamp: 3;
  }
`

export const Description = styled.p`
  width: 75%;
  height: 36px;
  line-height: 18px;
  color: #333;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const Meta = styled.div<{ type: ViewTypeValue }>`
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  justify-content: space-between;
  color: #777;
  max-height: ${({ type }) => (type === 'list' ? '16px' : 'initial')};

  @media only screen and (max-width: 600px) {
    max-height: none;
  }
`

export const ImageWrapper = styled.div<{ type: ViewTypeValue }>`
  max-width: ${({ type }) => (type === 'list' ? '160px' : '324px')};
  height: ${({ type }) => (type === 'list' ? '90px' : 'initial')};
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    max-width: 324px;
    height: auto;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
`
