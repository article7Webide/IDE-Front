import React, { useState } from 'react';
import axios from 'axios';
import styles from './SignUp.module.scss';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();


  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
    checkpw: "",
    nickname: "",
  });
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-z]{1,50})(?=.*[A-Z]{1,50}).{8,16}$/;


  // 아이디 중복 확인
  // const [isIdUnique, setIsIdUnique] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const delSpace = (data) => {
    return data.replace(/\s/g, '');
  };

  // 아이디 중복 검사 함수
  // const confirmID = async () => {
  //   const userid = registerValues.userId;

  //   if (userid) {
  //     //api 연결
  //     try {
  //       const response = await axios.post(
  //         'http://13.125.30.49:8080/auth/signup',
  //         { userid }
  //       );

  //       if (response.data.status === 200) {   //백엔드로 보낸 데이터 결과 200일 경우
  //         alert('사용 가능한 아이디입니다.');
  //         setIsIdUnique(true);    // 사용가능한 아이디 일 경우 true로 변경
  //       } else if (response.data.status === 400) {
  //         alert('이미 존재하는 아이디입니다.');
  //         setIsIdUnique(false);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  // 회원가입 폼 제출 함수
  const checkSignup = async () => {
    delSpace(registerValues.email);
    delSpace(registerValues.password);
    delSpace(registerValues.nickname);
    
    // if (!isIdUnique) {    // 중복확인을 하지 않았다면(IisIdUnique가 false)
    //   alert("아이디 중복 확인 해주세요.");
    //   return;
    // }
    //비밀번호 일치 확인
    if (registerValues.password !== registerValues.checkpw) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    //모든 필드가 채워져 있는지 확인
    if (!registerValues.email || !registerValues.password || !registerValues.nickname) {
      alert("모든 사항을 입력해주세요");
      return;
    }
    if(!emailRegEx.test(registerValues.email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }
    if(!passwordRegEx.test(registerValues.password)) {
      alert("비밀번호가 8~16자의 영문 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
      return;
    }
    //api 연결
    try {
      const response = await axios.post(
        "http://13.125.30.49:8080/auth/signup",
        {
          email: registerValues.email,
          password: registerValues.password,
          nickname: registerValues.nickname,
        }
      );
      if (response.status === 200) {
        if (response.data) {
          alert("회원가입 성공");
          navigate("/");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      }
    } catch (error) {
      //로그인 에러 표시
      console.error("signup Error:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // 서버에서 에러 메시지를 제공하는 경우
        alert(error.response.data.message);
      } else {
        // 그 외의 클라이언트 측에서 잡힌 에러
        alert("회원가입에 실패하였습니다. 다시 시도해 주세요.");
      }
    }
  };


  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        {/* <form onSubmit={checkSignup}> */}
        <div className={styles.formSignup}>
          <div className={styles.idcheck}>
            <input
              name='email'
              placeholder='이메일'
              type='text'
              onChange={handleInputChange}
            />
            {/* <button className={styles.checkbtn} onClick={confirmID}>중복확인</button> */}
          </div>

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
          <button type="submit" className={styles.registerbtn} onClick={checkSignup}>회원가입</button>
          <div className={styles.already_member}>
            이미 계정이 있습니까?
            <span onClick={() => navigate("/")}> 로그인</span>
          </div>
        </div>

        {/* </form> */}


      </div>

    </div>
  )
}

export default SignUp