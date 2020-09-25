import React, {Component} from 'react';
import styled from 'styled-components';

const StyledMenuListItem = styled.li`
     a {
        color: #FFEAD0;
        font-size: 1.8rem;
        position: relative;
        line-height: 3;
        font-weight: 300;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 1.4px;
        transition: letter-spacing 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    }
    
    & a::after,
    & a:visited::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 2px;
        width: 0;
        background: #FFF;
        border-radius: 2px;
        transition: width 0.2s cubic-bezier(0.77,0.2,0.05,1.0), box-shadow 1.5s ease-in-out;
    }

    & a:hover,
    & a:focus {
        outline: none;
        letter-spacing: 1.8px;
        transition: letter-spacing 0.2s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    & a:hover::after,
    & a:focus::after {
        width: 100%;
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
    }

    @media only screen and (min-width: 768px) {
        & a {
            font-size: 1.6rem;
            line-height: 2.5;
        }
    }
`

export default class MenuListItem extends Component {

    constructor(props) {
        super();
        this.state = {
            keyboardNav: false,
        };
    }

    componentDidUpdate(prevprops) {
        if(this.props.open !== prevprops.open) {
            if (this.props.open === false) {
                this.setState({
                    keyboardNav: false
                });
            } else {
                this.setState({
                    keyboardNav: true
                });
            }
        }
    }

    render() {
        return(
            <StyledMenuListItem open={this.props.open}>
                <a
                    href={this.props.page.url}
                    tabIndex={this.state.keyboardNav ? '0' : '-1'}
                >
                    {this.props.page.title}
                </a>
            </StyledMenuListItem>
        );
    }
}