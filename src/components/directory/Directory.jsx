import React, { useState } from 'react'
import styles from './Directory.module.scss'
import Items from './directory-items/Items'
import CreateDir from './create-directory/CreateDir';

const Directory = () => {


  return (
    <div className={styles.directory}>
      <div className={styles.container}>
        <div className={styles.note__title}>
          <h1>모든 컨테이너</h1>
          <button >+ 새 컨테이너</button>
        </div>
        <hr />
        <Items />

      </div>
    </div>
  )
}

export default Directory