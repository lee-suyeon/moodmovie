import React from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { useSelector } from 'react-redux';
import './Sections/NavBar.css';

function NavBar() {
  const user = useSelector(state => state.user);

  return (
    <nav className='menu' 
      style={{ position: 'fixed', zIndex: 1, width: '100%', height: '60px', backgroundColor: '#fff', overflow: 'hidden'
    }}>
      <div className='menu-container' style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div className='left-menu'>
          <LeftMenu mode='horizontal' user={user}/>
        </div>
        <div className='right-menu'>
          <RightMenu mode='horizontal' user={user}/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
