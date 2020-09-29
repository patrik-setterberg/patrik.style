import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    &, 
    &:visited {
        display: inline-block;
        color: var(--color-cream);
        text-decoration: none;
        font-size: 15px;
        line-height: var(--icon-size);
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 600;
    }

    &:focus {
        outline: var(--default-outline);
        outline-offset: 3px;
    }
`

export default function TextLink(props, className) {
    return(
        <StyledLink
            className={className}
            href={props.url}
            title={props.title}
        >
            {props.text}
        </StyledLink>
    );
}