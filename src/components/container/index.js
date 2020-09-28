import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: var(--container-width);
    margin: 0 auto;
    padding: 4rem var(--default-padding);
`

export default function Container({children, className}) {
    return(
        <StyledContainer className={className}>
            {children}
        </StyledContainer>
    );
}