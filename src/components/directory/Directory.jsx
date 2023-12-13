import React from 'react'
import styles from './Directory.module.scss'
import Items from './directory-items/Items'

const Directory = () => {
  return (
    <div className={styles.directory}>
      <div className={styles.container}>
        <div className={styles.note__title}>
          <h1>Containers</h1>
          <button>+</button>
        </div>
        <hr />
        <Items />

      </div>
    </div>
  )
}

export default Directory