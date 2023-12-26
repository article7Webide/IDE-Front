import React, { useState } from 'react'
import styles from './Header.module.scss'
import { IoMdMenu } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaMessage } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { LiaToggleOnSolid,LiaToggleOffSolid  } from "react-icons/lia";
import { IoShareSocial } from "react-icons/io5";import { useNavigate } from 'react-router-dom';
;

const Header = ({openChat,setOpenChat,handleChat}) => {

  const [menuView, setMenuView] = useState(false);
  const navigate = useNavigate();



  const gomain=()=> {
    navigate('/main');
  }

  return (
    <div className={styles.header} >
      <div className={styles.header_wrapper} style={{}}>
        <div className={styles.left_side}>
          <button className={styles.icons} onClick={()=>{setMenuView(!menuView)}} > {/* 햄버거바 클릭시 view 상태 반대로 */}
            <IoMdMenu size={24} />
          </button>
          <button className={styles.icons}>
            <LiaToggleOnSolid size={24} />
          </button>
        </div>
        <div className={styles.right_side}>
          <button className={styles.icons} onClick={gomain}>
            <FiLogOut size={24} />
          </button>
          <button className={styles.icons}>
            <IoShareSocial size={24} />
          </button>
          <button className={styles.icons}  onClick={handleChat} openChat={openChat}>
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