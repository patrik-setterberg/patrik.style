import React from 'react';
import styled from 'styled-components';

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
    font-size: 1rem;
    line-height: var(--icon-size);
`

function Legal() {
    return(
        <LegalStuff>
            <Copyright>
                © 2020 | Patrik Setterberg
            </Copyright>
            <Policies>
                <span>Privacy policy</span> <span>|</span> <span>Cookie Policy</span>
            </Policies>
        </LegalStuff>
    );
}

export default Legal;