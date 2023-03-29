import styled from 'styled-components'
import { ViewTypeValue } from 'types/ViewType'

export const Wrapper = styled.div<{ type: ViewTypeValue }>`
  display: ${({ type }) => (type === 'list' ? 'flex' : 'grid')};
  flex-direction: column;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-template-rows: repeat(auto-fill, 320px);
  gap: 12px;
  padding: 24px;
  background-color: #f0f0f0;
  height: 100%;

  @media only screen and (max-width: 614px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Header = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`
