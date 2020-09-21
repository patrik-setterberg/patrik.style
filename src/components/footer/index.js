import React, {Component} from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: auto;
    background-color: #444;
    flex-shrink: 0;
`

const FooterContainer = styled.div`
    width: var(--container-width);
    margin: 0 auto;
    padding: 20px;
    color: #FFEAD0;
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