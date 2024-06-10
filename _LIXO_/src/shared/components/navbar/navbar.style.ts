//styled
import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  border-radius: 0 0 30px 30px;
  max-width: ${theme.measure.sizes.maxWidthContainer};
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: ${theme.colors.greenLemonTheme.greenLemon50};
`;

export const NavbarLogoImageContainer = styled.div`
  width: 150px;
  height: 100%;
  position: relative;

  img {
    top: -10px;
    width: 100%;
    position: absolute;
    cursor: pointer;
  }
`;

export const NavbarNavMenusList = styled.ul<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: 10;
  transition: all 0.3s ease;

  button {
    width: 200px;
  }

  .close-button {
    display: none;
  }

  @media only screen and (max-width: 950px) {
    position: fixed;
    width: 300px;
    padding: 30px;
    right: ${({ isActive }) => (isActive ? '0' : '-300px')};
    top: 0;
    height: 100vh;
    flex-direction: column;
    background-color: ${theme.colors.purpleTheme.purple100};

    .close-button {
      display: block;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    right: ${({ isActive }) => (isActive ? '0' : '-100%')};
  }
`;

export const NavbarButtonMenus = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    font-size: 50px;
    color: ${theme.colors.neutralTheme.neutral00};
  }

  @media only screen and (max-width: 950px) {
    display: block;
  }
`;

export const NavbarPlayNowButtonContainer = styled.div`
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
