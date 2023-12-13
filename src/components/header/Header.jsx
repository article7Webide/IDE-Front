import React, { useState } from 'react'
import styles from './Header.module.scss'
import { IoMdMenu } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaMessage } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

  const [menuView, setMenuView] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.left_side}>
          <button className={styles.icons} onClick={()=>{setMenuView(!menuView)}} > {/* 햄버거바 클릭시 view 상태 반대로 */}
            <IoMdMenu size={24} border />
            
          </button>
        </div>
        <div className={styles.right_side}>
          <button className={styles.icons}>
            <FiLogOut size={24} />
          </button>
          <button className={styles.icons}>
            <FaMessage size={24} />
          </button>
          <button className={styles.icons}>
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header