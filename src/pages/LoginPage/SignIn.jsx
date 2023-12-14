import React, { useState } from 'react'
import styles from './SignIn.module.scss';
import {useNavigate} from "react-router-dom";

const SignIn2 = (props) => {
  const [id,setId] = useState("")
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



return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Login</div>
        </div>

        <br />

        <div className={"inputContainer"}>
          <input 
            value =  {id}
            placeholder = "아이디를 입력해주세요."
            onChange = {ev => setId(ev.target.value)}
            className = {"inputBox"} />
          <label className = "errorLabel">{idError}</label>  
        </div>

        <br />

        <div className={"inputContainer"}>
          <input
            value = {password}
            placeholder = "비밀번호를 입력해주세요"
            onChange = {ev => setPassword(ev.target.value)}
            className = {"inputBox"} />
          <label className = "errorlabel">{passwordError}</label>
        </div>

        <br />

        <div className = {"inputContainer"}>
          <input 
            className = {"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"로그인"}/>  
        </div>
        <div className = {"inputContainer"}>
          <input 
            className = {"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"회원가입"}/>  
        </div>
    
</div>

}

export default SignIn2