import React, {useState} from 'react'
import RadioButton from './radiobutton.scss'

const MakeContainer = () => {
  const [stack, setStack] = useState({react: false, spring: false, java: false })

  const onChangeStack = (e) => {
    const { name } = e.target
    console.log('clicked', name)
    if (name === 'react') {
      setStack({ react: true, spring: false, java: false})
    }
    if (name === 'spring') {
      setStack({ react: false, spring: true, java: false})
    }
    if (name === 'spring') {
      setStack({ react: false, spring: false, java: true})
    }
  }
  return (
    <div>
      <div className="makecontainer">
        <div className= "userinfo">
          유저 닉네임
        </div>
      </div>
      <div>
        <button className="spaceButton">스페이스</button>
        <button className="AllContainerButton">모든 컨테이너</button>
        <button className="MyContainerButton">내 컨테이너</button>
      </div>
      <div className="titleContainer">
          <h1>컨테이너 생성</h1>
      </div>
      <div className="container-info">
        <div>
          <h1>컨테이너 이름</h1>
          <input/>
        </div>
        <div>
          <h1>컨테이너 설명</h1>
          <input/>
        </div>
        <div className="select-stack">
          <p>사용하시려는 스택을 선택해주세요</p>
          <RadioButton
            name="react"
            id="react"
            value="React"
            text="React"
            onChange={onChangeStack}
            checked={stack.react}
            />
          <RadioButton
            name="spring"
            id="spring"
            value="Spring"
            text="Spring"
            onChange={onChangeStack}
            checked={stack.spring}
            />
          <RadioButton
            name="java"
            id="java"
            value="Java"
            text="Java"
            onChange={onChangeStack}
            checked={stack.java}
            />  

          
        </div>
      </div>
    </div>
  )
}

export default MakeContainer
