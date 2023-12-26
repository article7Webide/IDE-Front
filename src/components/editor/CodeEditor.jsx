import React, { useState } from 'react'
import styles from './CodeEditor.module.scss'
import Editor from '@monaco-editor/react'
import CodeMirror from "@uiw/react-codemirror";
import axios from 'axios';


const CodeEditor = () => {

  const [code,setCode] = useState("");
  const [result, setResult] = useState([]);

  const onChange = (e) => {
    setCode(e) // CodeMirror의 값이 변할 때마다 호출되어서 값이 저장된다.
  }

  // const runCode = async () => {
  //   // 제출버튼을 누르면 axios를 통해 서버로 코드데이터가 넘어간다.
  //     await axios.post("http://localhost:8080", { "data": code })
  //       .then((result) => {
  //         console.log(result.data)
  //         setResult(result.data.result)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }

  return (
    <div className={styles.editor}>
      <div className={styles.folder_name_area} />
        <CodeMirror
          className={styles.codemirror_st}
          value={code}
          onChange={onChange}
          height='600px'
          style={{
            overflow: 'auto',
            boxSizing: 'border-box',
          }}
        />
    </div>
  )
}

export default CodeEditor