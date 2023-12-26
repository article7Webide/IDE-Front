import React, { useState } from 'react'
import styles from './Directory.module.scss'
import Items from './directory-items/Items'

const Directory = ({ projects }) => {


  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Items key={project.drectory_id} project={project} type={project.type} title={project.directory_title}  />
      ))}
    </div>
  )
}

export default Directory