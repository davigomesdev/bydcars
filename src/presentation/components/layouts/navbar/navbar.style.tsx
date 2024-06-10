//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  max-width: ${theme.utils.dimensions.maxContainer};
  border-radius: 0 0 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 30px;
  background-color: ${theme.colors.greenLemonTheme.greenLemon50};
  position: sticky;
  top: 0;
  z-index: ${theme.utils.zIndices.overlay};
`;

export const Logo = styled.div`
  width: 150px;
  height: 100%;
  position: relative;

  img {
    top: -10px;
    width: 100%;
    position: absolute;
    cursor: pointer;
  }

    @media only screen and (max-width: 950px) {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        top: auto;
        position: relative;
      }
    }
`;

interface MenusProps {
	isActive: boolean;
}

export const Menus = styled.ul<MenusProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 30px;
  z-index: ${theme.utils.zIndices.overlay};
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

export const ButtonMenus = styled.button`
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

export const PlayNowButton = styled.div`
  min-width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
