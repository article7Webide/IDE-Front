import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.scss'
import { IoMdMenu } from "react-icons/io";
// import Directory from '../../components/directory/Directory'
import MainSiderbar from '../../components/main-sidebar/MainSiderbar'

const MainPage = () => {
  const [openSide, setOpenSide] = useState(false);
  const [projects,setProjects] =React.useState([]);
  const [user, setUser] = useState(null);

  //projects가 변할때마다 실행
  useEffect(() => {
    console.log('Projects:', projects);
  }, [projects]);

  const handleSide = () => {
    setOpenSide(!openSide);
  }

  //컨터이너 불러오기
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axiosInstance.get("projects");
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user data: ", error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  return (

    <div className={styles.mainpage}>
      {openSide && <MainSiderbar handleSide={handleSide} />}

      <div className={styles.container}>
      {!openSide && <button onClick={handleSide} className={styles.sideOpen}><IoMdMenu size={24} border /></button>}
        <div className={styles.note__title} style={{ paddingTop: '30px' }}>
          <h1>모든 컨테이너</h1>
          <button >+ 새 컨테이너</button>
        </div>
        <hr />

        {/* <Items /> */}
      </div>


    </div >


  )
}

export default MainPage