import React, { useState } from 'react'
import styles from './CodeEditor.module.scss'
import Editor from '@monaco-editor/react'
import CodeMirror from "@uiw/react-codemirror";


const CodeEditor = () => {

  const [code,setCode] = useState("");

  return (
    <div className={styles.editor}>
      <div className={styles.folder_name_area} />
        <CodeMirror
          value={code}
          height='100%'
          options={{
            fontSize: 15,
            minimap: { enabled: false },
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto'
            }
          }}
        />
    </div>
  )
}

export default CodeEditor