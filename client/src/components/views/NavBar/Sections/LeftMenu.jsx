import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SmileOutlined } from '@ant-design/icons';

function LeftMenu ({ mode }) {
  
  return (
    <div style={{ display: "flex" }}>
      <Menu mode={mode}>
        <Menu.Item key="home">
          <Link to="/">🏡 HOME </Link>
        </Menu.Item>
      </Menu>
      <Menu mode={mode}>
        <Menu.Item key="favorite">
          <Link to="/favorite">❤️ Favorite</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default LeftMenu
