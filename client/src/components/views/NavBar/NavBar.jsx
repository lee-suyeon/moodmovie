import React from 'react';
import RightNav from './Sections/RightNav';
import LeftNav from './Sections/LeftNav';

function NavBar() {
  return (
    <nav className="menu" style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="menu_container" style={{ display: "flex", justifyContent: "space-between"}}>
        <RightNav mode="horizontal"/>
        <LeftNav mode="horizontal"/>
      </div>
    </nav>
  )
}

export default NavBar
