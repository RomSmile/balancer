import styled from 'styled-components';
import { Button } from 'antd';
import { INavigation, INavigationSideMenu } from './types';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  box-shadow: 8px 3px 8px rgba(246, 241, 241, 0.53);
  background-color: #5423e7;
  padding: 10px 20px;

  @media screen and (max-width: 640px) {
    justify-content: space-between;
  }
`;

export const StyledLogo = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  font-size: 24px;
  width: 150px;
  color: #fff;
  margin: 0;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

  & a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  & span {
    font-size: 14px;

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }

    & a {
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      transition: color 0.3s;

      &:hover {
        color: black;
      }
    }
  }
`;

export const NavigationWrapper = styled.nav`
  width: 100%;
  max-width: 450px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const Navigation = styled.ul<INavigation>`
  display: flex;
  ${({ isrow }) =>
    !Number(isrow)
      ? `
        flex-direction: column;
        padding: 0; 
        align-items: flex-start;
       `
      : `align-items: center;`}
  justify-content: flex-start;
  list-style: none;
`;

export const NavigationItem = styled.li`
  padding: 5px 10px;

  & a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;

    &:hover {
      color: #000;
    }
  }
`;

export const BurgerMenuButton = styled(Button)`
  align-self: center;
  @media screen and (min-width: 641px) {
    display: none;
  }
`;

export const CloseBurgerMenuButton = styled(Button)`
  position: absolute;
  top: 25px;
  right: 20px;
`;

export const NavigationSideMenu = styled.div<INavigationSideMenu>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  ${({ isopen }) => !Number(isopen) && 'transform: translateX(100%);'}
  height: 100dvh;
  width: 100vw;
  background: #5423e7;
  z-index: 4;
  padding: 20px 25px;
  transition: all 0.3s;

  @media screen and (min-width: 641px) {
    display: none;
  }
`;
