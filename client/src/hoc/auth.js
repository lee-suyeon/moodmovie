import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
  
  // null : 아무나 접속이 가능한 페이지
  // true : 로그인한 유저만 접속 가능한 페이지
  // false : 로그인한 유저는 접속이 불가능한 페이지
  // adminRoute = true : 관리자만 출입 가능한 페이지
  
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    // 서버에서 유저의 상태를 요청한다.
    useEffect(() => {
      dispatch(auth()).then(response => {
        console.log('인증체크', response)

        if(!response.payload.isAuth){
          if(option){
            props.history.push('/login');
          } else {
            if(adminRoute && !response.payload.isAdmin){
              props.history.push('/');
            } else {
              if(option === false){
                props.history.push('/');
              }
            }
          }
        }
      })
    }, [])
    return (
      <SpecificComponent />
    )
  }
  return AuthenticationCheck
}