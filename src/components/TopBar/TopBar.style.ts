import { Button as ButtonComponent } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 16px rgba(3, 3, 3, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    height: 50px;
    padding: 0 12px;
  }
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  column-gap: 36px;

  @media only screen and (max-width: 600px) {
    column-gap: 12px;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;

  @media only screen and (max-width: 1024px) {
    column-gap: 12px;
  }
`

export const Title = styled.h1`
  color: #333;
  font-size: 36px;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`

export const Icon = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    width: 24px;
    height: 24px;
  }
`
export const Text = styled.p`
  color: #555;
  font-size: 16px;
`

export const ButtonGroup = styled.div<{ hideOnMobile?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 12px;

  ${({ hideOnMobile }) =>
    hideOnMobile &&
    `@media only screen and (max-width: 600px) {
    display: none;
  }`}
`

export const IconButton = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? '#aaa' : 'none')};
  color: ${({ active }) => (active ? 'black' : '#555')};
  transition: all 0.2s ease-in;
  font-weight: 500;

  &:hover {
    background-color: #ccc;
  }
`

export const Separator = styled.div`
  height: 32px;
  width: 1px;
  background-color: #555;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const Button = styled(ButtonComponent)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`
