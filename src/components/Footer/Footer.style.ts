import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(3, 3, 3, 0.3);

  @media only screen and (max-width: 600px) {
    height: 50px;
    padding: 0 12px;
    flex-direction: row;
  }
`
