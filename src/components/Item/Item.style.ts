import styled from "styled-components";
import { ViewTypeValue } from "../../types/ViewType";

export const Wrapper = styled.div<{type: ViewTypeValue}>`
    display: flex;
    align-items: center;
    flex-direction: ${({type }) => type === "grid" ? "column" : undefined };
    column-gap: 12px;
    width: ${({type}) => type === "list" ? "100%" : undefined};
    max-width: ${({type}) => type === "grid" ? "400px" : undefined};
    padding: 16px;
    background-color: #fff;
    box-shadow: 8px 8px 16px rgb(3, 3, 3, .3);
    border-radius: 12px;
    min-height: ${({type}) => type === "list" ? "120px" : "320px"};
    cursor: pointer;
    
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      width: auto;
      max-width: 400px;
      min-height: 320px;
    }
`

export const TitleSection = styled.div<{ type: ViewTypeValue }>`
  margin-top: ${({ type }) => (type === "grid" ? "12px" : undefined)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 6px;
  width: 100%;
  height: 100%;
  flex: 1;

  @media only screen and (max-width: 600px) {
    margin-top: 12px;
  }
`;

export const Title = styled.h3<{ type: ViewTypeValue }>`
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: ${({ type }) => (type === "list" ? 1 : 3)};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 22px;

  @media only screen and (max-width: 600px) {
    -webkit-line-clamp: 3;
  }
`;

export const Description = styled.p`
  width: 75%;
  height: 36px;
  line-height: 18px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const Meta = styled.div<{ type: ViewTypeValue }>`
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  justify-content: space-between;
  max-height: ${({ type }) => (type === "list" ? "16px" : undefined)};

  @media only screen and (max-width: 600px) {
    max-height: none;
  }
`;

export const Author = styled.span``;

export const Date = styled.span``

export const ImageWrapper = styled.div<{ type: ViewTypeValue }>`
  max-width: ${({ type }) => (type === "list" ? "160px" : "324px")};
  height: ${({ type }) => (type === "list" ? "90px" : undefined)};
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    max-width: 324px;
    height: auto;
  }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    object-fit: cover;
`