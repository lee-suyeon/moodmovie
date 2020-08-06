import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, SmileOutlined } from '@ant-design/icons';

function RightNav({ mode }) {
  return (
    <div style={{ display: "flex" }}>
      <Menu mode={mode}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">MOMO</Link>
        </Menu.Item>
      </Menu>
      <Menu mode={mode}>
        <Menu.Item key="favorite" icon={<SmileOutlined />}>
          <Link to="/favorite">Favorite</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default RightNav
