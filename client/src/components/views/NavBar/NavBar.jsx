import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';

function NavBar() {
  return (
    <nav className="menu" style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="menu_container" style={{ display: "flex", justifyContent: "space-between"}}>
        <LeftMenu mode="horizontal"/>
        <RightMenu mode="horizontal"/>
      </div>
    </nav>
  )
}

export default NavBar