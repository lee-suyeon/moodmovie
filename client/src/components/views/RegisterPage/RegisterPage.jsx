import React,{ useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

const inputLayout = {
  labelCol: { 
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = inputs;

  const onInputHandler = useCallback((e) => {
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value,
    });
  },[inputs])

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      return alert('비밀번호가 일치하지 않습니다!');
    }

    let registInfo={
      name,
      email,
      password,
      confirmPassword
    }

    dispatch(registerUser(registInfo))
      .then(response => {
        if(response.payload.success){
          props.history.push('/login');
        } else {
          alert('회원가입에 실패했습니다.');
        }
      })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
      width: '100%', height: '100vh', fontSize: '1.1rem'
    }}>
        <h2 style={{ marginBottom: '2rem' }}>회원가입</h2>
        <form
          className='register-form'
          onSubmit={onSubmitHandler}
          style={{ width: '20rem' }}
        >
          <Form.Item
            {...inputLayout}
            label='이름'
            rules={[{ required: true, message: '이름을 입력해주세요!' }]}
          >
            <Input
              name='name'
              value={name}
              onChange={onInputHandler}
              placeholder='Name'
              autoComplete='off'
            />
          </Form.Item>

          <Form.Item
            {...inputLayout}
            label='이메일'
            rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16}}
          >
            <Input
              name='email'
              value={email}
              onChange={onInputHandler}
              placeholder='E-mail'
              autoComplete='off'
            />
          </Form.Item>

          <Form.Item
            {...inputLayout}
            label='비밀번호'
            rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
          >
            <Input 
              name='password'
              value={password}
              onChange={onInputHandler}
              type='password' 
              placeholder='Password'
              autoComplete='off'
            />
          </Form.Item>
          <Form.Item
            {...inputLayout}
            label='비밀번호 확인'
            rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
          >
            <Input 
              name='confirmPassword'
              value={confirmPassword}
              onChange={onInputHandler}
              type='password'
              placeholder='Confirm password'
              autoComplete='off'
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button
              type='primary' 
              htmlType='submit' 
              size='large'
              block
              >
              가입하기
            </Button>
          </Form.Item>
        </form>
      </div>
  );
}

export default withRouter(RegisterPage);
