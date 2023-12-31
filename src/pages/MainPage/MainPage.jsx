import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.scss'
import { IoMdMenu } from "react-icons/io";
// import Directory from '../../components/directory/Directory'
import MainSiderbar from '../../components/main-sidebar/MainSiderbar'
import axios from 'axios';
import Directory from '../../components/directory/Directory';
import CreateDir from '../CreateDirectory/CreateDir';
import { FaSliders } from 'react-icons/fa6';

const MainPage = () => {
  const [openSide, setOpenSide] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [containers,setContainers] =React.useState([]);
  const [user, setUser] = useState(null);
  const [filter,setFilter] = useState(0);
  const filterTitle ={
    0: "모든 컨테이너",
    1: "내 컨테이너",
    2: "공유받은 컨테이너",
  }

  const baseUrl = `http://13.125.30.49:8080`

  //사이드바 열고 닫기
  const handleSide = () => {
    setOpenSide(!openSide);
  }
  // 컨테이너 생성 모달창 열고 닫기
  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  // 컨터이너 불러오기
  useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/api/container/list`);
          localStorage.setItem('containers', JSON.stringify(response.data));
          setContainers(response.data);
          console.log("load container", );

        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      };
      fetchUserData();
  
      const userdata = localStorage.getItem("user");
      setUser(userdata);
  }, []);

  return (

    <div className={styles.mainpage}>
      {modalIsOpen && <CreateDir modalIsOpen={modalIsOpen} handleModal={handleModal} user={user} /> }

      {openSide && <MainSiderbar handleSide={handleSide} setFilter={setFilter} filterTitle={filterTitle} />}

      <div className={styles.container}>
      {!openSide && <button onClick={handleSide} className={styles.sideOpen}><IoMdMenu size={24} /></button>}
        <div className={styles.note__title} style={{ paddingTop: '30px' }}>
          <h1>{filterTitle[filter]}</h1>
          <button onClick={handleModal} >+ 새 컨테이너</button>
          
        </div>
        <hr />
        <Directory containers={containers} user={user}/>
        
      </div>


    </div >


  )
}

export default MainPage