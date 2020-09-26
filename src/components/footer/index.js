import React, {Component} from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: auto;
    background: linear-gradient(to bottom, var(--color-almost-black), var(--color-gray), var(--color-almost-black));
    flex-shrink: 0;
`

const FooterContainer = styled.div`
    width: var(--container-width);
    margin: 0 auto;
    padding: 20px;
    color: var(--color-cream);
`

export default class Footer extends Component {

    render() {
        return(
            <StyledFooter>
                <FooterContainer>FOOTER_CONTENT</FooterContainer>
            </StyledFooter>
        );
    }
}