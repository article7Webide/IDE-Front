import React from 'react'
import FileSidebar from '../../components/file-sidebar/FileSidebar'
import styles from './Editer.module.scss'
import Header from '../../components/header/Header'
import CodeEditor from '../../components/editor/CodeEditor'

const Editer = () => {
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