import React, {Component} from 'react';
import styled from 'styled-components';
import Contact from './components/contact';
import FooterIcon from './components/footer_icon';

const StyledFooter = styled.footer`
    width: auto;
    background: var(--color-almost-black);
    flex-shrink: 0;
    padding: calc(var(--default-padding) * 2) 0;

    --icon-size: 1.5rem;
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
    color: var(--color-cream);

    @media only screen and (max-width:767px) {
        
    }

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`

const TopLink = styled.div`
    display: flex;
    justify-content: center;


    & a {
        display: flex;
        align-items: center;    
        color: var(--color-cream);
        text-decoration: none;
        padding: 0.5rem;

        &::before,
        &::after {
            opacity: 0;
            text-transform: uppercase;
            transition: opacity 0.25s var(--default-timing);
        }

        &:hover::before,
        &:hover::after {
            opacity: 1;
        }

        &::before {
            content: 'Go back';
            margin-right: 1rem;
        }

        &::after {
            content: 'to top';
            margin-left: 1rem;
        }
    }

    @media only screen and (max-width: 767px) {
        order: -1;
    }
`

const LegalStuff = styled.div`
    margin-top: calc(var(--default-padding) * 2);
    
    & span {
        display: block;
        font-size: 1rem;
        line-height: var(--icon-size);

        &:first-of-type {
            padding-bottom: var(--icon-size);
            margin-bottom: var(--icon-size);
            border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        }
    }

    @media only screen and (min-width: 768px) {
        margin-top: 0;
        width: 30%;
        text-align: right;
    }
`

export default class Footer extends Component {

    render() {
        return(
            <StyledFooter>
                <FooterContainer>
                    <Contact />
                    <TopLink>
                        <a href="#bodyElem" title="Back to the top">
                            <FooterIcon iconName={'arrow'} />
                        </a>
                    </TopLink>
                    <LegalStuff>
                        <span>© 2020 | Patrik Setterberg</span>
                        <span>
                            Privacy policy | Cookie policy
                        </span>
                    </LegalStuff>
                </FooterContainer>
            </StyledFooter>
        );
    }
}