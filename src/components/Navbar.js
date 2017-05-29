import React, { Component } from 'react';
import './Navbar.css';

import {Navbar,Nav,NavItem} from 'react-bootstrap';
import BurgerMenu from './BurgerMenu';

import freedaLogo from '../img/freeda-logo.png'

class FreedaNavbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: props.open
    };
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({sidebarOpen: nextProps.open});
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    let isOpen = !this.state.sidebarOpen;
    this.setState({sidebarOpen: isOpen});
    this.props.onMenuClick(isOpen);
  }

  render() {
    return (
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/#home">
              <img src={freedaLogo} alt="logo freeda"/>
            </a>
          </Navbar.Brand>
          <Navbar.Text className="navbar-title"><span className="RalewayBold">DONNE DEL</span> '900</Navbar.Text>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={3} onClick={this.menuButtonClick} href="#menu"><BurgerMenu open={this.state.sidebarOpen} /></NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default FreedaNavbar;
