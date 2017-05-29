import React, { Component } from 'react';
import './BurgerMenu.css';

class BurgerMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  render() {
    return (
      <div id="nav-icon3" className={this.props.open ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
export default BurgerMenu;
