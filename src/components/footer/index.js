import React, {Component} from 'react';
import styled from 'styled-components';
import Contact from './components/contact';
import Legal from './components/legal';
import TopLink from './components/top_link';

const StyledFooter = styled.footer`
    width: auto;
    background: var(--color-almost-black);
    flex-shrink: 0;
    padding: var(--default-padding) 0 calc(var(--default-padding) * 2) 0;

    --icon-size: 1.5rem;

    @media only screen and (min-width: 768px) {
        padding: calc(var(--default-padding) * 2) 0;
    }
`

const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: var(--container-width);
    margin: 0 auto;
    padding-left: var(--default-padding);
    padding-right: var(--default-padding);
    color: var(--color-white);
    letter-spacing: 0.8px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        
    }
`

export default class Footer extends Component {

    render() {
        return(
            <StyledFooter>
                <FooterContainer>
                    <Contact />
                    <TopLink />
                    <Legal />
                </FooterContainer>
            </StyledFooter>
        );
    }
}