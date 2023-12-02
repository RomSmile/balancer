import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import useStore from '../../hooks/useStore';
import { routes } from '../../static';
import {
  BurgerMenuButton,
  CloseBurgerMenuButton,
  HeaderWrapper,
  Navigation,
  NavigationItem,
  NavigationSideMenu,
  NavigationWrapper,
  StyledLogo,
} from './styled';

const Header = () => {
  const { userAccess } = useStore();
  const [isOpenSideMenu, setOpenSideMenu] = useState<boolean>(false);

  const closeSideMenu = () => {
    setOpenSideMenu(false);
  };

  const openSideMenu = () => {
    setOpenSideMenu(true);
  };

  const showNavigationMenu = userAccess.allowEnter || localStorage.getItem('allowEnter') === '1';
  return (
    <>
      {showNavigationMenu && (
        <NavigationSideMenu isopen={isOpenSideMenu ? '1' : '0'}>
          <StyledLogo>
            <Link onClick={closeSideMenu} to="/">
              BALANCER
            </Link>{' '}
            <span>
              Powered by{' '}
              <a href="https://github.com/RomSmile" target="_blank" rel="noreferrer">
                RomSmile
              </a>
            </span>
          </StyledLogo>
          <Navigation isrow={'0'}>
            {routes.map((route, index) => (
              <NavigationItem key={index}>
                <Link onClick={closeSideMenu} to={route.path}>
                  {route.name}
                </Link>
              </NavigationItem>
            ))}
          </Navigation>
          <CloseBurgerMenuButton onClick={closeSideMenu} type="primary" shape="circle" danger>
            X
          </CloseBurgerMenuButton>
        </NavigationSideMenu>
      )}
      <HeaderWrapper>
        <StyledLogo>
          <Link to="/">BALANCER</Link>{' '}
          <span>
            Powered by{' '}
            <a href="https://github.com/RomSmile" target="_blank" rel="noreferrer">
              RomSmile
            </a>
          </span>
        </StyledLogo>
        {showNavigationMenu && (
          <>
            <NavigationWrapper>
              <Navigation isrow={'1'}>
                {routes.map((route, index) => (
                  <NavigationItem key={index}>
                    <Link to={route.path}>{route.name}</Link>
                  </NavigationItem>
                ))}
              </Navigation>
            </NavigationWrapper>
            <BurgerMenuButton onClick={openSideMenu} shape="circle" icon={<MenuOutlined />} />
          </>
        )}
      </HeaderWrapper>
    </>
  );
};

export default Header;
