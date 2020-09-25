import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import ToggleSwitch from '../../toggle_switch';

const StyledToggler = styled(ToggleSwitch)`
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.3s cubic-bezier(0.77,0.2,0.05,1.0);
    ${props => props.open && css`
        transform: translateX(0%);
        opacity: 1;`
    }
    
    & label {
        text-indent: -112px;
    }

    & label::after {
        background: linear-gradient(to bottom, #2e434c, #314852);
    }

    @media only screen and (min-width: 768px) {
        top: 2rem;
        right: 2.5rem;
    }
`

export default class DarkToggle extends Component {

    render() {
        return(
            <StyledToggler open={this.props.open} Id="darkToggler" text="Dark mode"/>
        );
    }
}