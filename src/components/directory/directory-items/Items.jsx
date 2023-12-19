import React, { useEffect } from 'react'
import styles from './Items.module.scss'

const Items = ({ project, title, type, key }) => {

  const fetchProjects = () => {

  }

  const handleEditpg = () => {

  }



  useEffect(() => {
    fetchProjects();
  }, [])


  return (
    <div className={styles.dirCard}>
      <div className={styles.topBox}>
        <div className={styles.dir_title}>
          {title.length > 10 ? title.slice(0, 10) + "..." : title}
          <span style={{ float: 'right' }}>
            {type}
          </span>
        </div>
        <div onClick={handleEditpg} className={styles.startbtn}>
          실행
        </div>
      </div>

    </div>
  )
}

export default Items