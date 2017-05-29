import React, { Component } from 'react';
import './WomenDetails.css';

import {Image} from 'react-bootstrap';

import iconJob from '../img/icon-job.png'

class WomenDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      woman: props.data
    };

    this.closeDetails = this.closeDetails.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({woman: nextProps.data});
  }

  closeDetails(){
    this.props.onClose();
  }

  render() {
    const woman = this.state.woman;
    if(woman.sourceName || woman.photoCredits){
    }

    const source = woman.sourceLink ? <a href={woman.sourceLink}>{woman.sourceName}</a> : <span>{woman.sourceName}</span>;

    const footer = woman.sourceName || woman.photoCredits ?
      <div className="footer">
        <hr/>
        <p>
          Fonti:<br/>
          {source}<br/>
          {woman.photoCredits}
        </p>
      </div> : null;

    return (
      <div className="Women-details">
        <div className="content">
          <a href="#details" className="close-btn" onClick={this.closeDetails}>x</a>
          <Image src={woman.photo} responsive rounded />
          <p >
            {woman.address}<br/>
            <span className="woman-name">{woman.name} {woman.surname}</span><br/>
            {woman.date}
          </p>
          {woman.job ?
            <div className="job-container">
              <img className="job-icon" src={iconJob} alt="icon job"/>
              <span >{woman.job}</span>
            </div> : ''
          }
          <p className="description">{woman.description}</p>
        </div>
        {footer}
      </div>
    );
  }
}
export default WomenDetails;
