import React, { useEffect, useState } from 'react'
import FileSidebar from '../../components/file-sidebar/FileSidebar'
import styles from './Editer.module.scss'
import Header from '../../components/header/Header'
import CodeEditor from '../../components/editor/CodeEditor'
import { useLocation } from 'react-router-dom'
import ChatRoom from '../../components/chatroom'
import Console from '../../components/console/Console'

const Editer = () => {

  const { state } = useLocation();
  const [openChat, setOpenChat] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [code, setCode] = useState('');

  const handleChat = () => {
    setOpenChat(!openChat);
  }

  const handletoggle = () => {
    setIsDarkMode(!isDarkMode);
  }


  useEffect(() => {
    console.log(state);
  }, [])

  return (
    <div className={styles.mainpage}>
      <Header
      isDarkMode={isDarkMode}
      handletoggle={handletoggle} openChat={openChat} setOpenChat={setOpenChat} handleChat={handleChat} />
      <div className={styles.layout}>
        <FileSidebar isDarkMode={isDarkMode} project={state} />
        {/* <Directory /> */}
        <div className={styles.editconteiner}>
          <CodeEditor
            isDarkMode={isDarkMode}
            value={code}
          />
          <Console />
        </div>

        {openChat && <ChatRoom openChat={openChat} setOpenChat={setOpenChat} handleChat={handleChat} />}
      </div>

    </div>
  )
}

export default Editer