import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styles from './SignUp.module.scss';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  
  const navigate = useNavigate();


  const [registerValues, setRegisterValues] = useState({
    userId: "",
    password: "",
    checkpw: "",
    nickname: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const checkSignup = async () => {
    //비밀번호 일치 확인
    if (registerValues.password !== registerValues.checkpw) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    //모든 필드가 채워져 있는지 확인
    if (!registerValues.userId || !registerValues.password || !registerValues.name) {
      alert("모든 사항을 입력해주세요");
      return;
    }
    //api 연결
    try {
      const response = await axios.post(
        "http://api/~~signup",
        {
          userId: registerValues.userId,
          password: registerValues.password,
          nickname: registerValues.nickname,
        }
      );
      if (response.data && response.data.message) {
        alert(response.data.message);
        navigate("/");
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    } catch (error) {
      console.error("Signup error!", error);
      alert("회원가입 중 오류가 발생하였습니다.");
    }
    // 서버 요청 추가 할 사항 있으면 할 것
  };


  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form onSubmit={checkSignup}>
          <input
            name='userId'
            placeholder='아이디'
            type='text'
            onChange={handleInputChange}
          />
          <input
            placeholder='비밀번호'
            type='password'
            name='password'
            autoComplete="off"
            onChange={handleInputChange}
          />

          <input
            placeholder='비밀번호 확인'
            type='password'
            name='checkpw'
            autoComplete='off'
            onChange={handleInputChange}
          />
          <input
            placeholder='닉네임'
            type='text'
            name='nickname'
            onChange={handleInputChange}
          />
          <button type="submit" className='registerbtn'>회원가입</button>
          <div className={styles.already_member}>
            이미 계정이 있습니까?
            <span onClick={() => navigate("/")}> 로그인</span>
          </div>
        </form>


      </div>

    </div>
  )
}

export default SignUp