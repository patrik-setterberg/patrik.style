import React, {Component} from 'react';
import styled from 'styled-components';


/* 
   ToggleSwitch
   Set id using prop "Id"
*/

const Input = styled.input`

    opacity: 0;

    &:focus ~ label {
        outline: var(--default-outline);
        outline-offset: 5px;
    }

    &:checked + label::after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
`

const Label = styled.label`
    display: block;
    height: 28px;
    width: 56px;
    border-radius: 28px;
    cursor: pointer;
    background: var(--color-cream);
    text-indent: -80px;
    font-size: 1rem;
    line-height: 1.875;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-cream);
    position: absolute;
    right: 0.5rem;
    top: 0;
    transition: box-shadow 1.2s ease-in-out;

    &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: white;
        transition: left 0.2s var(--default-timing), transform 0.2s var(--default-timing);
    }

    &:hover {
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
    }

    @media only screen and (min-width: 768px) {
        height: 32px;
        width: 64px;
        line-height: 2.1;

        &::after {
            height: 28px;
            width: 28px;
        }
    }

`

export default class ToggleSwitch extends Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className={this.props.className}>
                <Input type="checkbox" id={this.props.Id || 'toggle_switch'} />
                <Label htmlFor={this.props.Id || 'toggle_switch'}>{this.props.text || 'Toggle'}</Label>
            </div>
        );
    }
}