import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import ToggleSwitch from '../../toggle_switch';

const StyledToggler = styled(ToggleSwitch)`
    display: block;
    position: absolute;
    top: var(--default-padding);
    right: var(--default-padding);
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.25s var(--default-timing), opacity 0.25s var(--default-timing);
    ${props => props.open && css`
        transform: translateX(0%);
        opacity: 1;`
    }
    
    & label {
        text-indent: -112px;
    }

    & label::after {
        background: var(--color-dark-blue);
    }

    @media only screen and (min-width: 768px) {
        right: 2.5rem;
    }
`

export default class DarkToggle extends Component {

    render() {
        return(
            <StyledToggler
                open={this.props.open}
                Id="darkToggler"
                text="Dark mode"
            />
        );
    }
}