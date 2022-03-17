import styled, { css } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const arrow = css`
    color: #fff;
    width: 30px;
    height: 30px;
    filter: drop-shadow(-3px 0px 0px #00000070);
    transition: transform .1s linear;

    &:active {
       transform: translateY(3px);
    }
`;

export const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;

    & > .slideShow {
        display: flex;
        flex-wrap: nowrap;
    }

    & > .slideShow > .slide {
        position: relative;
        min-width: 100%;
        height: 100%;
        transition: .3 ease all;
        z-index: 1;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    } 

    & > .controllers {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    & > .controllers > button {
        pointer-events: all;
        background: none;
        border: none;
        outline: none;
        width: 50px;
        height: 100%;
        text-align: center;
        cursor: pointer;
        transition: all .3s ease;

        &:hover {
            background: rgba(0, 0, 0 ,.2);
        }
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const PrevArrow = styled(IoIosArrowBack)`
    ${arrow}    
`;

export const NextArrow = styled(IoIosArrowForward)`
    ${arrow}    
`;