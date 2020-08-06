import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


function LoginPage(props) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const { email, password } = inputs;

  const onInputHandler = useCallback((e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value,
    });
  },[inputs])

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let userInfo = {
      email,
      password
    }
    dispatch(loginUser(userInfo))
      .then(response => {
        if(response.payload.loginSuccess){
          props.history.push('/')
          console.log('login',response.data)
        } else {
          alert('login 실패');
        }
      })
  }

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
      width: "100%", height: "100vh", fontSize: "1.1rem"
    }}>
      <div className="login" style={{ width: "25vw", padding: "3rem", textAlign: "center" }}>
        <h2 style={{ marginBottom: "2rem" }}>Login</h2>
        <form
          className="login-form"
          onSubmit={onSubmitHandler}
        >
          <Form.Item
            rules={[{ required: true, message: "이메일을 입력해주세요!" }]}
          >
            <Input
              value={email}
              onChange={onInputHandler}
              name="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="이메일" 
              autoComplete="off"
            />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "비밀번호를 입력해주세요!" }]}
          >
            <Input 
              value={password}
              name="password"
              onChange={onInputHandler}
              type="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="비밀번호" 
              autoComplete="off"
            />
          </Form.Item>

          <Button 
            type="primary" 
            htmlType="submit" 
            size="large" 
            block
            style={{ marginBottom: "0.5rem"}}
            >
            로그인
          </Button>
          Or <a href="/register">register now!</a>
        </form>
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
