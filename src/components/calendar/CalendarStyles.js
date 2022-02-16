import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Container = styled.div`
    position: absolute;
    right: ${props => props.startingPoint};
    width: 200px;
    height: 350px;

    & > .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #ddd;
    }

    & > .body > .day-names{
        width: 100%;
        display: flex;
        
        & > .week {
            background: #aaa;
            width: calc(100% / 7);
            text-align: center;
        }
    }
`;

export const LeftArrow = styled(IoIosArrowBack)`

`;

export const RightArrow = styled(IoIosArrowForward)`

`;

export const Day = styled.div`
    position: relative;
    width: calc(100%/7);
    height: 44px;
    display: inline-block;
    background: #fff;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
    text-align: center;

    & > div {
        width: 100%;
        background: #fff;
        line-height: 44px;
        user-select: none;
        cursor: pointer;

        &:hover{
            background: #aaa;
        }
    }

    & > .unselectable {
        color: #aaa;
        cursor: default;

        &:hover {
            background: #fff;
        }
    }

    & > .today {
        background: #aaa;
    }

    & > .selected {
        background: red;
        color: #fff;

        &:hover{
            background: red;
        }
    }
`;