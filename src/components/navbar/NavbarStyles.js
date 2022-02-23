import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 2px 0 10px 5px #ddd;
    background: #2E8049;

    & > a {
        font-size: 28px;
        font-weight: 700;
        color: #fff;
    }

    & ul{
        display: flex;
    }

    & ul li{
        list-style: none;
        margin: 0 10px;

        & a{
            padding: 5px 10px;
            border-radius: 10px;
            color: #fff;
        }
        & .account {
            position: relative;
        }
        & .account .user{
            color: #fff;
            font-weight: 600;
            user-select: none;
        }

        & .account li {
            width: 80%;
        }

        & .account .options {
            display: none;
            position: absolute;
            right: 0;
            padding: 10px 0;
            background: #666;
            color: #fff;
            margin-top: 10px;
            border-radius: 15px;
            transform: translateY(0);
            transition: .5s;
            width: 150px;
            &:before {
                position: absolute;
                content: '';
                transition: transform .5s ease;
                border-style: solid;
                border-width: 0 15px 15px 15px;
                border-color: transparent transparent #666 transparent;
                top: -10px;
                right: 10px;
            }
            & .option {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                user-select: none;
            }
        }

        & .account:hover .options {
            display: block;
        }
    }

    & ul li a.active{
        color: #999;
    }
`;