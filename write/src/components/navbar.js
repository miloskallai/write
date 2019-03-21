import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <span className="logo-wrapper">write</span>
        <span>Random Dude</span>
        <button className="btn btn-m">preview</button>
        <button className="btn btn-l">save and download</button>
      </div>
    </div>
  );
};

export default NavBar;
