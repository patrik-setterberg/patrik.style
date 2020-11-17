import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import Menu from './components/menu';
import Brand from './components/brand';
import DarkToggle from './dark_mode_toggler';
import g from '../../globals.js';
import {largestSmall} from '../../globals.js';

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background: var(--color-dark-blue);
    /*background: linear-gradient(to bottom, var(--color-dark-cyan-02), var(--color-dark-cyan-01), var(--color-dark-cyan-02));*/
    flex: 0 0 auto;
    border-bottom: 2px solid var(--almost-black);
    box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;

    @media ${g.atleastMedium} {
        transform-style: preserve-3d;

        &::after {
            content: '';
            top: 0;
            position: absolute;
            width: 100vw;
            height: 100vh;
            transform:translateZ(-1px);
            pointer-events: none;
            background: var(--color-gray);
            opacity: 0;
            transition: opacity 0.25s var(--default-timing);
        }
    }

    ${props => props.open && css`
        height: var(--header-open-height) !important;
        
        @media ${g.atleastMedium} {
            &::after {
                opacity: 0.4;
            }  
        }`
    }

    @media ${g.small} {
        max-height: var(--header-mobile-height);        
    }
`

export default class Header extends Component {
    
    defaultHeight = g.defaultHeaderHeight;
    minHeight = g.minHeaderHeightSmall;

    constructor() {
        super();
        this.state = {
            open: false,
            height: this.defaultHeight,
            transition: null
        }
    }

    toggleOpen() {

        // Toggle transition. This is needed because if the component always
        // has a transition it interferes with the header's scroll-dependent
        // auto resizing.
        !this.state.open ?
            this.setState({transition: 'height 0.25s var(--default-timing'}) :
            setTimeout(() => {this.setState({transition: 'unset'})}, 30); // send help

        this.setState({
            open: !this.state.open
        });
    }

    checkWidth() {
        return window.innerWidth > largestSmall;
    }

    setMinHeight() {
        this.minHeight = this.checkWidth() ? g.minHeaderHeightLarge : g.minHeaderHeightSmall;
        this.setHeight();
    }

    setHeight() {
        if ((this.defaultHeight - window.scrollY) > this.minHeight) {
            this.setState({
                height: this.defaultHeight - window.scrollY
            });
        } else if (window.scrollY > (this.defaultHeight - this.minHeight) && this.state.height !== this.minHeight) {
            this.setState({
                height: this.minHeight
            });
        }
    }

    componentDidMount() {
        this.setMinHeight();
        window.addEventListener('scroll', this.setHeight.bind(this));
        window.addEventListener('resize', this.setMinHeight.bind(this));

        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && this.state.open === true) {
              this.toggleOpen();

              document.getElementById('menu-checkbox').checked = false;
            }
        }.bind(this));
    }

    /* maybe a utilities folder somewhere...
    checkReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion)');
    }
    */

    render() {
        return (
            <StyledHeader
                open={this.state.open}
                style={{
                    height: `${this.state.height}px`,
                    transition: `${this.state.transition}`,
                }}
            >
                <Menu
                    toggleOpen={this.toggleOpen.bind(this)} 
                    open={this.state.open}
                />
                <Brand open={this.state.open} />
                <DarkToggle open={this.state.open}/>
            </StyledHeader>
        );   
    }
}