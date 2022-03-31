import styled from "styled-components";

export const SignupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: ${props => props.isDark ? '#181818' : '#eee'};

    & > .form-container {
        display: flex;
        width: 750px;
        border-radius: 40px;
        overflow: hidden;
        box-shadow: 10px 10px 10px ${props => props.isDark ? 'rgba(0, 0, 0, .5)' : 'rgba(100, 100, 100, .5)'};

        & h2 {
            margin: 20px 0;
            color: ${props => props.isDark ? '#fff' : '#2E8049'};
        }

        & > .container {
            position: relative;
            padding: 1.5rem;
            z-index: 1;
            background: none;
            min-height: 550px;
            width: 50%;

            & > .background {
                position : absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 25%;
                }
            }

            & > form {
                display: flex;
                flex-direction: column;
                margin-top: 65px;
                color: ${props => props.isDark ? '#fff' : '#000'};

                & > .form-group {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 5px;

                    & > input{
                        padding: 5px 15px;
                        border: 1px solid #2E8049;
                        border-radius: 15px;
                        font-size: 16px;
                        background: none;
                        color: ${props => props.isDark ? '#fff' : '#000'};

                        &:focus {
                            outline: 2px solid #2e8049;
                        }
                    }
                }

                & > button{
                    width: 200px;
                    padding: 10px;
                    margin-top: 10px;
                    border-radius: 20px;
                    border: none;
                    background: #2E8049;
                    color: #fff;
                    align-self: center;
                    font-size: 16px;
                    cursor: pointer;
                }

                & > .error {
                    margin-bottom: 5px;
                    align-self: flex-end;
                    color: red;
                }

                & .ring-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 200px;
                    height: 38px;
                    margin-top: 10px;
                    background: #2E8049;
                    border-radius: 20px;
                    align-self: center;

                    & .ring {
                        animation: spin 1s linear infinite;
                        color: #fff;
                        font-size: 20px;
                    }  
                }

                & > .link {
                    display: flex;
                    align-self: center;
                    margin-top: 5px;
                    font-size: 12px;
                    & a {
                        color: #2E8049;
                    }
                }
            }
        }

        & > .div-info {
            display: flex;
            flex-direction: column;
            position: relative;
            background-color: ${props => props.isDark ? '#2E8049': '#2E8049'};
            padding: 1.5rem;
            min-height: 550px;
            color: #fff;
            width: 50%;

            h2{
                color: #fff;
            }
        }
    }
`;