import React, { Component } from 'react';
import './App.css';

import Sidebar from 'react-sidebar';

import FreedaNavbar from './components/Navbar';
import WomenDetails from './components/WomenDetails';
import Menu from './components/Menu';
import Map from './components/Map';
import MapLeaflet from './components/MapLeaflet';

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

  isSupportWebGL() {
    var canvas;
    var ctx;
    var exts;

    try {
      canvas = document.createElement('canvas');
      ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      exts = ctx.getSupportedExtensions();
    }
    catch (e) {
      console.log(e);
      ctx = undefined;
    }

    return ctx !== undefined;
  }

  render() {
    const sidebarDetailsProps = {
      sidebar: <WomenDetails data={this.state.womanDetails} onClose={this.onCloseDetails}/>,
      sidebarClassName: 'custom-sidebar-class',
      styles:{
        sidebar: {
          zIndex: 4
        },
        overlay: {
          zIndex: 3
        }
      },
      open: this.state.sidebarDetailsOpen,
      touch: this.state.sidebarDetailsOpen,
      onSetOpen: this.onCloseDetails,
      pullRight: false
    };
    const sidebarMenuProps = {
      sidebar: <Menu/>,
      sidebarClassName: 'custom-sidebar-class',
      styles:{
        sidebar: {
          zIndex: 4
        },
        overlay: {
          zIndex: 3
        }
      },
      open: this.state.sidebarMenuOpen,
      onSetOpen: this.onMenuClick,
      pullRight: true
    };

    const mapPage = this.isSupportWebGL() ?
      <Map onOpenDetails={this.onOpenDetails}/> :
      <MapLeaflet onOpenDetails={this.onOpenDetails}/>;

    return (
      <div className="App">
        <FreedaNavbar open={this.state.sidebarMenuOpen} onMenuClick={this.onMenuClick}/>
        <Sidebar {...sidebarDetailsProps}>
          <Sidebar {...sidebarMenuProps}>
            {mapPage}
          </Sidebar>
        </Sidebar>

      </div>
    );
  }
}

export default App;
