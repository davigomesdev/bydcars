//styled imports
import styled, { keyframes } from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

interface BackgroundProps {
	image: string;
}

export const Background = styled.div<BackgroundProps>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: ${pulse} 50s infinite;
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Start = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    gap: 25px;

    img{
        width: 100%;
        max-width: 700px;
        transition: transform 0.1s ease;
    }

    h1{
        font-size: ${theme.font.size['8xl']};
        letter-spacing: 4px; 
        font-family: ${theme.font.family.adumu};
        color: ${theme.colors.greenLemonTheme.greenLemon50};
        cursor: pointer;
        animation: ${blink} 1s infinite;
    }
`;

export const HomeAboutContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 50px 20px;
    background-color: ${theme.colors.purpleTheme.purple50};
    display: grid;
    align-items: center;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
`;

export const HomeAboutInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 15px;
    color: ${theme.colors.neutralTheme.neutral00};
    h1{
        font-size: 60px;
        letter-spacing: 4px;
        text-align: right;
        font-family: ${theme.font.family.adumu};
    }

    p{
        font-family: ${theme.font.family.poppins};
        color: ${theme.colors.neutralTheme.neutral00};
        max-width: 450px;
    }
`;

export const HomeAboutFiguresContainer = styled.div`
    width: 100%;
    position: relative;
    span{
        width: 100%;
        bottom: 0;
        left: 80px;
        position: absolute;
    }

    span img{
        width: 100%;
    }
`;

export const HomeAboutFiguresBackgroundContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
    }
`;
