import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(3, 3, 3, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 1;

  @media only screen and (max-width: 600px) {
    height: 50px;
    padding: 0 12px;
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  column-gap: 36px;

  @media only screen and (max-width: 600px) {
    column-gap: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 36px;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

export const IconPrimary = styled.div`
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
`;
export const Text = styled.p`
  color: #555;
  font-size: 16px;
`;

export const Views = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const IconSecondary = styled.div<{active?: boolean}>`
  width: 32px;
  height: 32px;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({active}) => active ? "#aaa" : "none"};
  color: ${({active}) => active ? "black" : "#555"};
  transition: all .2s ease-in;
`;
