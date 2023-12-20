import React, { useEffect } from 'react'
import styles from './Items.module.scss'
import { useNavigate } from 'react-router-dom'
import { MdPlayArrow } from "react-icons/md";

const Items = ({ project, title, type, key }) => {

  const navigate = useNavigate();

  const fetchProjects = () => {

  }

  const handleEditpg = () => {
    navigate('/editor', {state:{project}})
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
        <MdPlayArrow />실행
        </div>
      </div>

    </div>
  )
}

export default Items