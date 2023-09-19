import React from 'react';
import { Card as AntdCard } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(AntdCard)`
    background: #FFFFFF;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 10px;
    cursor: pointer;
    width: ${(props) => props.width || '60%'}; // Use the width prop, default to 60% if not provided
    transition: 0.5s;


    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`;
const CenteredContainer = styled.div`
    /* Styles for the container */
    display: grid;
    place-items: center;
    height: 100vh; /* Adjust this as needed based on your layout */
`;

const CustomCard = ({ children, width }) => {
    return (
        <CenteredContainer>
        <StyledCard width={width}>
            {children}
        </StyledCard>
        </CenteredContainer>
    );
};

export default CustomCard;
