import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import './Sections/NavBar.css';

function NavBar() {
  return (
    <nav className="menu" 
      style={{ position: "fixed", zIndex: 1, width: "100%", height: "60px", backgroundColor: "#fff", overflow: "hidden"
    }}>
      <div className="menu-container" style={{ display: "flex", justifyContent: "space-between"}}>
        <div className="left-menu">
          <LeftMenu mode="horizontal"/>
        </div>
        <div className="right-menu">
          <RightMenu mode="horizontal"/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
