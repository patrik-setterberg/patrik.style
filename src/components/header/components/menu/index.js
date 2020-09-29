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
    top: var(--default-padding);
    left: var(--default-padding);
    z-index: 1;
    user-select: none;
    transition: top 0.2s var(--default-timing),
        left 0.2s var(--default-timing);
`

export default class Menu extends Component {

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
