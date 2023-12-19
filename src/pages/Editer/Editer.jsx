import React, { useEffect } from 'react'
import FileSidebar from '../../components/file-sidebar/FileSidebar'
import styles from './Editer.module.scss'
import Header from '../../components/header/Header'
import CodeEditor from '../../components/editor/CodeEditor'
import { useLocation } from 'react-router-dom'

const Editer = () => {

  const {state} = useLocation();
  
  useEffect(()=> {
    console.log(state);
  },[])

  return (
    <div className={styles.mainpage}>
      <Header />
      <div className={styles.layout}>
        <FileSidebar />
        {/* <Directory /> */}
        <CodeEditor />
      </div>

    </div>
  )
}

export default Editer