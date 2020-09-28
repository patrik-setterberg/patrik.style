import React from 'react';
import styled from 'styled-components';
import FooterIcon from '../footer_icon';

const StyledTopLink = styled.div`
    display: flex;
    justify-content: center;


    & a {
        display: flex;
        align-items: center;    
        color: var(--color-cream);
        text-decoration: none;
        padding: 0.5rem;
        letter-spacing: 1px;

        &::before,
        &::after {
            opacity: 0;
            text-transform: uppercase;
            transition: opacity 0.25s var(--default-timing);
        }

        &:hover::before,
        &:hover::after,
        &:focus::before,
        &:focus::after {
            opacity: 1;
        }

        &::before {
            content: 'Back to';
            margin-right: 1rem;
        }

        &::after {
            content: 'the top';
            margin-left: 1rem;
        }

        &:focus {
            outline: var(--default-outline);
        }
    }

    @media only screen and (max-width: 767px) {
        order: -1;
    }
`

const TopLinkIcon = styled(FooterIcon)`

    --top-link-icon-size: 1.25rem;

    width: var(--top-link-icon-size);
    height: var(--top-link-icon-size);
`

function TopLink() {
    return (
        <StyledTopLink>
            <a href="#top" title="Click to scroll to the top of the page">
                <TopLinkIcon iconName={'arrow'} />
            </a>
        </StyledTopLink>
    )
}

export default TopLink;