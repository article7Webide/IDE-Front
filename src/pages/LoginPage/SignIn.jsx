import React, { useState } from 'react'
import styles from './SignIn.module.scss';
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [idError, setIdError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const navigate = useNavigate();

  const onButtonClick = () => {
    setIdError("")
    setPasswordError("")

    if ("" === id) {
      setIdError("아이디를 입력해주세요")
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(id)) {
      setIdError("정확한 아이디를 입력해주세요")
      return
    }

    if ("" === password) {
      setPasswordError("비밀번호를 입력해주세요")
      return
    }

    if (password.length < 7) {
      setPasswordError("비밀번호를 8글자이상입력해주세요")
      return
    }
  }



  return (
    <div className={styles.sign}>
      <div className={styles.container}>
        <div className={"titleContainer"}>
          <h1>Login</h1>
        </div>

        <br />
        <div className={styles.formSignin}>
          <div className={"inputContainer"}>
            <input
              value={id}
              placeholder="아이디를 입력해주세요."
              onChange={ev => setId(ev.target.value)}
              className={"inputBox"} />
            <label className="errorLabel">{idError}</label>
          </div>
          <div className={"inputContainer"}>
            <input
              value={password}
              placeholder="비밀번호를 입력해주세요"
              onChange={ev => setPassword(ev.target.value)}
              className={"inputBox"} />
            <label className="errorlabel">{passwordError}</label>
          </div>

          <button type="submit" className={styles.registerbtn} onClick={onButtonClick}>로그인</button>
          <div className={styles.already_member}>
            아직 회원이 아닙니까?
            <span onClick={() => navigate("/register")}> 회원가입</span>
          </div>
        </div>

      </div>


    </div>
  )
}

export default SignIn