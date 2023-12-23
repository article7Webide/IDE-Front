import React, { useEffect } from 'react'
import styles from './Items.module.scss'
import { useNavigate } from 'react-router-dom'
import { MdPlayArrow } from "react-icons/md";
import { FaLock,FaLockOpen } from "react-icons/fa6";

const Items = ({ project, title, type, key }) => {

  const navigate = useNavigate();
  const handleEditpg = () => {
    navigate('/editor', {state:{project}})
  }

  return (
    <div className={styles.dirCard}>
      <div className={styles.topBox}>
        <div className={styles.dir_title}>
          {title.length > 10 ? title.slice(0, 10) + "..." : title}
          <span style={{ float: 'right' }}>
            {(type ==='public')? <FaLockOpen />:<FaLock />}
          </span>
        </div>
        <div className={styles.middle_box}>
          <h4>{project.create_data}</h4>
        </div>
        <div onClick={handleEditpg} className={styles.startbtn}>
        <MdPlayArrow />실행
        </div>
      </div>

    </div>
  )
}

export default Items