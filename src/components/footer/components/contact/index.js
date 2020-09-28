import React from 'react';
import styled from 'styled-components';
import FooterIcon from '../footer_icon';
import TextLink from '../text_link';

const ContactWrapper = styled.div`
    margin-top: var(--default-padding);

    @media only screen and (min-width: 768px) {
        width: 30%;
        margin-top: 0;    
    }
`

const IconLinkContainer = styled.div`
    display: flex;
    padding-top: var(--icon-size);
    margin-top: var(--icon-size);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
`

const IconLink = styled.a`
    display: inline-flex;
    margin-right: var(--icon-size);
    
    &:focus {
        outline: var(--default-outline);
        outline-offset: 4px;
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
                url={`mailto:${email.address}`}
                title={email.title}
                text={email.address}
            />
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