import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { LoginOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import Axios from 'axios';

function LeftNav({ mode, history }) {
  const user = useSelector(state => state.user);

  const onClickLogout = () => {
    Axios.get('api/users/logout')
      .then(response => {
        if(response.data.success){
          history.push('/');
        } else {
          alert('로그아웃을 실패하였습니다.')
        }
      })
  }

  if(user.userData && !user.userData.isAuth){
    return (
      <Menu mode={mode}>
        <Menu.Item key="login" icon={<LoginOutlined />}>
          <Link to="/login">Sign in</Link>
        </Menu.Item>
        <Menu.Item key="register" icon={<UserAddOutlined />}>
          <Link to="/register">Sign up</Link>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={mode}>
        <Menu.Item key="login" icon={<LogoutOutlined />} onClick={onClickLogout}>
          Logout
        </Menu.Item>
        {/* <Menu.Item key="register" icon>
          <Link to="/register">Register</Link>
        </Menu.Item> */}
      </Menu>
    )
  }
}

export default withRouter(LeftNav);
