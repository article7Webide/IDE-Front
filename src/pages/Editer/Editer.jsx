import React, { useEffect, useState } from 'react'
import FileSidebar from '../../components/file-sidebar/FileSidebar'
import styles from './Editer.module.scss'
import Header from '../../components/header/Header'
import CodeEditor from '../../components/editor/CodeEditor'
import { useLocation } from 'react-router-dom'

const Editer = () => {

  const {state} = useLocation();
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  
  useEffect(()=> {
    console.log(state);
  },[])

  return (
    <div className={styles.mainpage}>
      <Header setIsDarkMode={setIsDarkMode}/>
      <div className={styles.layout}>
        <FileSidebar isDarkMode={isDarkMode}/>
        {/* <Directory /> */}
        <CodeEditor isDarkMode={isDarkMode}/>
      </div>

    </div>
  )
}

export default Editer