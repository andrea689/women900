import React, { Component } from 'react';
import './App.css';

import Sidebar from 'react-sidebar';

import FreedaNavbar from './components/Navbar';
import WomenDetails from './components/WomenDetails';
import Menu from './components/Menu';
import Map from './components/Map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarMenuOpen: false,
      sidebarDetailsOpen: false,
      womanDetails: {}
    };

    this.onMenuClick = this.onMenuClick.bind(this);
    this.onOpenDetails = this.onOpenDetails.bind(this);
    this.onCloseDetails = this.onCloseDetails.bind(this);
  }

  onMenuClick(open) {
    this.setState({sidebarMenuOpen: open});
  }

  onOpenDetails(data) {
    this.setState({sidebarDetailsOpen: true, womanDetails: data});
  }

  onCloseDetails() {
    this.setState({sidebarDetailsOpen: false, womanDetails: {}});
  }

  render() {
    const sidebarDetailsProps = {
      sidebar: <WomenDetails data={this.state.womanDetails} onClose={this.onCloseDetails}/>,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.sidebarDetailsOpen,
      touch: this.state.sidebarDetailsOpen,
      onSetOpen: this.onCloseDetails,
      pullRight: false
    };
    const sidebarMenuProps = {
      sidebar: <Menu/>,
      sidebarClassName: 'custom-sidebar-class',
      open: this.state.sidebarMenuOpen,
      onSetOpen: this.onMenuClick,
      pullRight: true
    };
    return (
      <div className="App">
        <FreedaNavbar open={this.state.sidebarMenuOpen} onMenuClick={this.onMenuClick}/>
        <Sidebar {...sidebarDetailsProps}>
          <Sidebar {...sidebarMenuProps}>
            <Map onOpenDetails={this.onOpenDetails}/>
          </Sidebar>
        </Sidebar>

      </div>
    );
  }
}

export default App;
