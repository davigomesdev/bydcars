//styled imports
import styled from 'styled-components';

//theme imports
import { theme } from '../../../themes/theme';

//swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.colors.purpleTheme.purple80};
`;

export const Elements = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    background-color: ${theme.colors.purpleTheme.purple50};
    overflow: hidden;

    span {
        flex: 1;
        height: 230px;
        background-color: ${theme.colors.purpleTheme.purple80};
        border-radius: 100%;
    }
`;

export const Content = styled.div`
    width: 100%;
`;

export const Deck = styled(Swiper)`
    width: 300px;
    height: 350px;
`;

export const Card = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
