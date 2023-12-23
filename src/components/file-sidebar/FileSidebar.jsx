import React, { useEffect } from 'react'
import styles from './FileSidebar.module.scss'


const FileSidebar = ({project}) => {

  //프로젝트 안에 프로젝트가 있었음..
  const prj = project.project;

  useEffect(()=> {

  },[])

  return (
    <div className={styles.container}>
      <div className={styles.folder_name_area}>
        {prj.directory_title}
      </div>
    </div>
  )
}

export default FileSidebar