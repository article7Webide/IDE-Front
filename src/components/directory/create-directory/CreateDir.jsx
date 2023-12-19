import React from 'react'
import styles from './CreateDir.module.scss'

const CreateDir = ({ closeNewConainer, viewCreater }) => {
  return (
    <div>
      <div>
        <label>컨테이너 이름</label>
        <input
          type='text'
          name='folder_name'
        />
      </div>

      <button onClick={closeNewConainer}>x</button>
    </div>
  )
}

export default CreateDir