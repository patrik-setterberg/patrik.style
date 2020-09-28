import React, {Component} from 'react';
import styled from 'styled-components';
import FooterIcon from '../footer_icon';

const ContactWrapper = styled.div`
    margin-top: var(--default-padding);

    @media only screen and (min-width: 768px) {
        width: 30%;
        margin-top: 0;    
    }
`

const IconLinkContainer = styled.div`
    display: flex;
`

const IconLink = styled.a`
    display: inline-flex;
    margin-right: var(--icon-size);
`

const TextLink = styled.a`
    &, 
    &:visited {
        display: block;
        color: var(--color-white);
        text-decoration: none;
        font-size: 1rem;
        line-height: var(--icon-size);
        padding-bottom: var(--icon-size);
        margin-bottom: var(--icon-size);
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    }
`

function Contact() {

    const email = {
        address: 'contact@patrik.style',
        title: 'Send me an email'
    }

    const socialLinks = [
        {
            name: 'github',
            url: 'https://www.github.com',
            title: 'Visit my GitHub page'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com',
            title: 'Connect on LinkedIn'
        }
    ];
    
    return(
        <ContactWrapper>
            <TextLink
                href={`mailto:${email.address}`}
                title={email.title}
            >
                {email.address}
            </TextLink>
            <IconLinkContainer>
                {socialLinks.map((link, i) =>
                    <IconLink 
                        href={link.url}
                        title={link.title}
                        key={i}
                    >
                        <FooterIcon iconName={link.name}/>
                    </IconLink>
                )}
            </IconLinkContainer>
        </ContactWrapper>
    );
}

export default Contact;