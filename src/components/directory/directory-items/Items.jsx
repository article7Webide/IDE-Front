import React, { useEffect } from 'react'
import styles from './Items.module.scss'

const Items = () => {

  const fetchProjects = () => {

  }

  useEffect(() => {
    fetchProjects();
  }, [])


  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default Items