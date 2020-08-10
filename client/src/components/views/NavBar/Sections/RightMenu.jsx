import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import { LoginOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import Axios from 'axios';

function RightMenu({ mode, history, user }) {

  const onClickLogout = () => {
    console.log('click');
    Axios.get('api/users/logout')
      .then(response => {
        if(response.status === 200){
          history.push('/login');
        } else {
          alert('로그아웃 실패')
        }
      });
  };

  if(user.userData && !user.userData.isAuth){
    return (
      <Menu mode={mode}>
        <Menu.Item key='login' icon={<LoginOutlined />}>
          <Link to='/login'>로그인</Link>
        </Menu.Item>
        <Menu.Item key='register' icon={<UserAddOutlined />}>
          <Link to='/register'>가입하기</Link>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={mode}>
        <Menu.Item key='login' icon={<LogoutOutlined />} onClick={onClickLogout}>
          로그아웃
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);
