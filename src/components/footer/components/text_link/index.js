import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    &, 
    &:visited {
        display: inline-block;
        color: var(--color-white);
        text-decoration: none;
        font-size: 1rem;
        line-height: var(--icon-size);
        text-transform: uppercase;
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