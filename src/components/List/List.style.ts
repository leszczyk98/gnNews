import styled from "styled-components";
import { ViewTypeValue } from "../../types/ViewType";

export const Wrapper = styled.div<{ type: ViewTypeValue }>`
  display: ${({ type }) => (type === "list" ? "flex" : "grid")};
  flex-direction: column;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 12px;
  padding: 24px;
  width: 100%;
  overflow-y: scroll;
  background-color: #f0f0f0;

  @media only screen and (max-width: 614px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.h2``