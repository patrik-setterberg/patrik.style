import React, {Component} from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
    & input {
        display: block;
        height: 44px;
        width: 44px;
        position: absolute;
        top: -8px;
        left: -3px;
        cursor: pointer;
        opacity: 0;
        z-index: 2;
    }

    & input:checked ~ span {
        opacity: 1;
        transform: rotate(-45deg) translate(-2px, -1px);
    }

    & input:checked ~ span:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }
    
    & input:checked ~ span:nth-last-child(3) {
        transform: rotate(45deg) translate(0, -1px);
    }

    & span {
        display: block;
        width: 38px;
        height: 4px;
        margin-bottom: 8px;
        background: #FFEAD0;
        position: relative;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px -1px;
        transition: transform 0.3s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.25s ease-out;
    }

    & span:first-child {
        transform-origin: 0% 0%;
    }

    & span:nth-last-child(3) {
        transform-origin: 0 100%;
    }

    & div {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        transition: width 0.2s cubic-bezier(0.77,0.2,0.05,1.0)
    }

    & input:focus ~ div {
        outline: var(--default-outline);
        outline-offset: 5px;
    }

    & input:checked ~ div {
        width: 77%;
    }

    @media only screen and (min-width: 768px) {
        & input {
            height: 50px;
            width: 50px;
        }

        & input:checked ~ span {
            transform: rotate(-45deg) translate(-2px, -1px);
        }

        & input:checked ~ span:nth-last-child(3) {
            transform: rotate(45deg) translate(0, -1px);
        }

        & span {
            width: 44px;
            height: 5px;
            margin-bottom: 9px;
            transform-origin: 4px 0px;
        }
    }
`

export default class Hamburger extends Component {

    render() {
        return(
            <StyledHamburger>
                <input
                    type="checkbox"
                    id="menu-checkbox"
                    onChange={() => this.props.toggleOpen()}
                />
                <div></div>
                <span></span>
                <span></span>
                <span></span>
            </StyledHamburger>
        );
    }
}