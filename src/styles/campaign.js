import styled from 'styled-components';

export const CampaignContainer = styled.div`
    & h2 {
        color: #2E8049;
    }
    & > button {
                    position: absolute;
                    right: 115px;

                    bottom: 20px;
                    padding: 5px 15px;
                    border: none;
                    background: ${props => props.subscribed ? 'red' : '#2E8049'};
                    color: #fff;
                    border-radius: 20px;
                    cursor: pointer;
                }
`;