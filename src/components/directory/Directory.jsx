import React, { useState } from 'react'
import styles from './Directory.module.scss'
import Items from './directory-items/Items'

const Directory = ({ containers }) => {


  return (
    <div className={styles.container}>
      {containers.map((container) => (
        <Items key={container.drectory_id} project={container} type={container.type} title={container.directory_title}  />
      ))}
    </div>
  )
}

export default Directory