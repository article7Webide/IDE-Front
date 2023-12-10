import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SignUp.module.scss';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  //   setFocus,
  // } = useForm();

  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [nickName, setNickName] = useState('');
  const [userData, setUserData] = useState([]);

  const onUserIdHandler = (event) => {
    setUserId(event.currentTarget.value);
  }
  const onNameHandler = (event) => {
    setNickName(event.currentTarget.value);
  }
  const onPasswordHandler = (event) => {
    setUserPw(event.currentTarget.value);
  }
  const onConfirmPasswordHandler = (event) => {
    setCheckPw(event.currentTarget.value);
  }
  const onSignup = (e) => {
    e.preventDefault();
    if (userPw !== checkPw) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    }

    setUserData((prevUserData) => {
      return [
        ...prevUserData,
        {
          name: { nickName },
          email: { userId },
          pw: { userPw },
          pwCk: { checkPw },
        },
      ];
    });
    console.log({ userData });

  };
  // const onSubmitHandler = (event) => {
  //     event.preventDefault();

  //     if(Password !== ConfirmPassword){
  //         return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
  //     }

  //     let body = {
  //         email: Email,
  //         name: Name,
  //         password: Password,
  //         confirmPassword: ConfirmPassword,
  //     }

  // dispatch(registerUser(body))
  // .then(response => {
  //     if(response.payload.success){
  //         props.history.push('/loginPage')
  //     } else {
  //         alert('Error')
  //     }
  // })
  // }
  /* 비밀번호 일치를 위한 useRef */
  // const passwordInputRef = useRef(null);
  // passwordInputRef.current = watch('password');


  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <h1>Sign Up</h1>
        <form onSubmit={onSignup}>
          <input
            placeholder='아이디'
            type='text'
            value={userId}
            onChange={onUserIdHandler}
          />
          <input
            placeholder='비밀번호'
            type='password'
            name='password'
            value={userPw}
            onChange={onPasswordHandler}
          // {...register('password', {
          //   required: true,
          //   pattern:
          //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,15}$/i,
          // })}
          // {errors.password && errors.password.type === 'required' && (
          //   <p>이 칸을 입력해주세요.</p>
          // )}
          // {errors.password && errors.password.type === 'pattern' && (
          //   <p>비밀번호 형식이 올바르지 않습니다.</p>
          // )}
          />
          <input
            placeholder='비밀번호 확인'
            type='password'
            name='confirm'
            value={checkPw}
            onChange={onConfirmPasswordHandler}
          // {...register('confirm', {
          //   required: true,
          //   validate: (value) => value === passwordInputRef.current,
          // })}
          />
          {/* {errors.confirm && errors.confirm.type === 'required' && (
          <p>비밀번호를 다시 입력해주세요</p>
        )}
          {errors.confirm && errors.confirm.type === 'validate' && (
          <p>비밀번호가 일치하지 않습니다.</p>
        )} */}
          <input
            placeholder='닉네임'
            type='text'
            value={nickName}
            onChange={onNameHandler}
          />
          <button type="submit">회원가입</button>
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