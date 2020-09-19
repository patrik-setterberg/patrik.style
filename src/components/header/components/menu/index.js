import React, {Component} from 'react';
import styled from 'styled-components';
import Hamburger from '../hamburger';
import MenuList from '../menu_list';

const Nav = styled.nav`
    flex: 0 0 auto;
    height: 100%;
`

const MenuWrapper = styled.div`
    display: block;
    position: relative;
    top: 2rem;
    left: 2rem;
    z-index: 1;
    user-select: none;
`

export default class Menu extends Component {
    constructor(props) {
        super();
    }


    render() {
        return(
            <Nav>
                <MenuWrapper>
                    <Hamburger toggleOpen={this.props.toggleOpen.bind(this)}/>
                    <MenuList {...this.props}/>
                </MenuWrapper>
            </Nav>
        );
    }
}
