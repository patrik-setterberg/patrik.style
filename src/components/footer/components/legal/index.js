import React from 'react';
import styled from 'styled-components';
import TextLink from '../text_link';

const LegalStuff = styled.div`
    margin-top: calc(var(--default-padding) * 2);

    @media only screen and (min-width: 768px) {
        margin-top: 0;
        width: 30%;
        text-align: right;
    }
`

const Copyright = styled.span`
    display: block;
    font-size: 1rem;
    line-height: var(--icon-size);
    padding-bottom: var(--icon-size);
    margin-bottom: var(--icon-size);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
`

const Policies = styled.div`
    font-size: var(--default-font-size);
    line-height: var(--icon-size);

    & span {
        color: var(--color-cream);
    }

    @media only screen and (min-width: 768px) and (max-width: 1299px) {
        & span {
            display: none;
        }
    }
`

function Legal() {

    const legalLinks = {
        privacy: {
            url: '#privacy',
            title: 'Read privacy policy',
            text: 'Privacy policy'
        },
        cookies: {
            url: '#cookies',
            title: 'Read about why and how I use cookies on this site',
            text: 'Cookie policy'
        }
    };

    return(
        <LegalStuff>
            <Copyright>
                © 2020 | Patrik Setterberg
            </Copyright>
            <Policies>
                <TextLink
                    url={legalLinks.privacy.url}
                    title={legalLinks.privacy.title}
                    text={legalLinks.privacy.text}
                />
                <span> | </span>
                <TextLink
                    url={legalLinks.cookies.url}
                    title={legalLinks.cookies.title}
                    text={legalLinks.cookies.text}
                />
            </Policies>
        </LegalStuff>
    );
}

export default Legal;