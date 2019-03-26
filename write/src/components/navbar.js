import React from 'react';
import { connect } from 'react-redux';
import { togglePreview } from '../actions/index';

const NavBar = ({ togglePreview }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <span className="logo-wrapper">write</span>
        <span>Random Dude</span>
        <button className="btn btn-m" onClick={togglePreview}>
          preview
        </button>
        <button className="btn btn-l">save and download</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  togglePreview: () => dispatch(togglePreview())
});

export default connect(
  undefined,
  mapDispatchToProps
)(NavBar);
