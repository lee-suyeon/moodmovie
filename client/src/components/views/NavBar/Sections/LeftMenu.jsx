import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';

function LeftMenu ({ mode, location }) {
  return (
    <div style={{ display: "flex" }}>
      <Menu mode={mode} selectedKeys={[ location.pathname ]}>
        <Menu.Item key="home">
          <Link to="/">🏡 HOME </Link>
        </Menu.Item>
        <Menu.Item key="favorite">
          <Link to="/favorite">❤️ 보고싶어요 </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default withRouter(LeftMenu);
