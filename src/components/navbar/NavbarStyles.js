import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 2px 0 10px 5px #ddd;
    background: #eee;

    & > a {
        font-size: 28px;
        font-weight: 700;
        color: #999;
    }

    & ul{
        display: flex;
    }

    & ul li{
        list-style: none;
        margin: 0 10px;
    }

    & ul li a{
        padding: 5px 10px;
        border-radius: 10px;
    }

    & ul li a.active{
        color: #999;
    }
`;