import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

export const Wrapper = styled.div<{ visible: boolean }>`
  padding: 24px 12px;
  min-width: 300px;
  background-color: rgba(3, 3, 3, 0.5);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .2s ease-in;
  height: 100%;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    height: calc(100% - 100px);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? undefined : "none")};
    min-width: auto;
  }

  @media only screen and (max-width: 600px) {
    top: 50px;
    height: calc(100% - 50px);
  }
`;

export const CountryList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const Country = styled.li`
  font-size: 20px;
  width: 100%;
  &:first-of-type {
    margin-top: 12px;
  }
  &:last-of-type {
    margin-bottom: 12px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 4px 12px;
  text-decoration: none;
  color: white;
  opacity: 0.9;
  height: 32px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #e0e0e0;
    opacity: 1;
    color: #777;
  }
  &.active {
    background-color: #f0f0f0;
    opacity: 1;
    color: #333;
  }

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const Flag = styled.div`
  width: 24px;
  height: 24px;
`;

export const Close = styled(CloseIcon)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 36px;
  left: 36px;
`;