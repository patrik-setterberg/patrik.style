import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: var(--container-width);
    margin: 0 auto;
    padding: 60px 20px 0 20px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.05);
`

export default function Container({children, className}) {
    return(
        <StyledContainer className={className}>
            {children}
        </StyledContainer>
    );
}