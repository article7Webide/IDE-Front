import React, { useEffect, useState } from 'react'
import styles from './MainSidebar.module.scss'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdAutoAwesomeMosaic } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// 사이드바 전체를 감싸는 컴포넌트
const MainSiderbar = ({ handleSide, setFilter }) => {
  const [menuShow, setMenuShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const hanedleMenu = () => {
    setMenuShow(!menuShow);
  }

  const handleFilter = (param, e) => {
    setFilter(param);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.personal}>
          <HiOutlineBuildingOffice2 />
          <span> PERSONAL</span>
          <MdOutlineKeyboardDoubleArrowLeft style={{ display: 'flex', float: 'right', color: 'black', fontSize: '24px', zIndex: '99' }} onClick={handleSide} />
        </div>
        <div className={styles.username}>
          {user.nickname}
        </div>
        <hr />
        <>
          <li className={styles.menu_fir} onClick={hanedleMenu}>
            <MdAutoAwesomeMosaic /> 스페이스 <span>
              <button >{menuShow ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
            </span>
          </li>
          {menuShow &&
            <div className={styles.menucontainer}>
              <li className={styles.menu_li} onClick={(e) => handleFilter(0, e)}>
                모든 컨테이너
              </li>
              <li className={styles.menu_li} onClick={(e) => handleFilter(1, e)}>
                내 컨텐이너
              </li>
              <li className={styles.menu_li} onClick={(e) => handleFilter(2, e)}>
                공유받은 컨테이너
              </li>
            </div>
          }
        </>
      </div>
    </div>
  )
}

export default MainSiderbar