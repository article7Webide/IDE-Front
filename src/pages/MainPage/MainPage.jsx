import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.scss'
import { IoMdMenu } from "react-icons/io";
// import Directory from '../../components/directory/Directory'
import MainSiderbar from '../../components/main-sidebar/MainSiderbar'
import axios from 'axios';
import Directory from '../../components/directory/Directory';

const MainPage = () => {
  const [openSide, setOpenSide] = useState(false);
  const [projects,setProjects] =React.useState([]);
  const [user, setUser] = useState(null);
  const [filter,setFilter] = useState(0);
  const filterTitle ={
    0: "모든 컨테이너",
    1: "내 컨테이너",
    2: "공유받은 컨테이너",
  }

  //projects가 변할때마다 실행
  useEffect(() => {
    //filter에 맞춰서 컨터이너 불러오기

    console.log('Projects:', projects);
  }, [projects]);

  useEffect(() => {

  }, [filter]);


  const handleSide = () => {
    setOpenSide(!openSide);
  }

  // 컨터이너 불러오기
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/projects");
        setProjects(res.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUserData();
  }, []);

  return (

    <div className={styles.mainpage}>
      {openSide && <MainSiderbar handleSide={handleSide} setFilter={setFilter} filterTitle={filterTitle} />}

      <div className={styles.container}>
      {!openSide && <button onClick={handleSide} className={styles.sideOpen}><IoMdMenu size={24} /></button>}
        <div className={styles.note__title} style={{ paddingTop: '30px' }}>
          <h1>{filterTitle[filter]}</h1>
          <button >+ 새 컨테이너</button>
        </div>
        <hr />

        <Directory projects={projects}/>
      </div>


    </div >


  )
}

export default MainPage