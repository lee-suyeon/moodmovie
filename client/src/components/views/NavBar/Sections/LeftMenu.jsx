import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function LeftMenu ({ mode, user }) {
  return (
    <div style={{ display: "flex" }}>
      <Menu mode={mode}>
        <Menu.Item key="home">
          <Link to="/">🏡 HOME </Link>
        </Menu.Item>
      </Menu>
      <Menu mode={mode}>
        <Menu.Item key="favorite">
          <Link to="/favorite">❤️ 보고싶어요 </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default LeftMenu
