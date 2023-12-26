import React, { useEffect, useState } from 'react'
import FileSidebar from '../../components/file-sidebar/FileSidebar'
import styles from './Editer.module.scss'
import Header from '../../components/header/Header'
import CodeEditor from '../../components/editor/CodeEditor'
import { useLocation } from 'react-router-dom'
import ChatRoom from '../../components/chatroom'

const Editer = () => {

  const {state} = useLocation();
  const [openChat, setOpenChat] = useState(false);

  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const [code, setCode] = useState('');

  const handleChat = () => {
    setOpenChat(!openChat);
  }

  
  useEffect(()=> {
    console.log(state);
  },[])

  return (
    <div className={styles.mainpage}>
      <Header setIsDarkMode={setIsDarkMode} openChat={openChat} setOpenChat={setOpenChat} handleChat={handleChat}/>
      <div className={styles.layout}>
        <FileSidebar isDarkMode={isDarkMode} project={state} />
        {/* <Directory /> */}
        <CodeEditor 
        isDarkMode={isDarkMode}
        value={code}
        />
        {openChat&& <ChatRoom openChat={openChat} setOpenChat={setOpenChat} handleChat={handleChat} />}
      </div>

    </div>
  )
}

export default Editer