import React, { Component } from 'react';
import './EditGuest.css';
import { connect } from 'react-redux';
import {updateGuest} from './../../ducks/guestList'

class EditGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.guest
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.update = this.update.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  update() {
    this.props.updateGuest(this.state.text, this.props.index);
    // update guest name function
    this.props.hide();
  }



  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input
            onChange={this.handleInputChange}
            value={this.state.text}
            type=""
            className="modal-input"/>
          <button
            onClick={this.update}
            type=""
            className="modal-btn">Update</button>
          <button
            onClick={this.props.hide}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}

export default connect(null, {updateGuest})(EditGuest);
