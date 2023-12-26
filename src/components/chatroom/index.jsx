import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMessageStore from '../../hooks/useMessageStore';
import { IoCloseOutline } from "react-icons/io5";


const ChatRoom = ({ openChat, setOpenChat, handleChat }) => {

  // const messageStore = useMessageStore();

  // const {
  //   connected,
  //   messageEntered,
  //   messageLogs,
  // } = messageStore;

  const chatPos = useSpring({ x: 0, y: 0 });
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);

  // const messageListRef = useRef(null); // Create a ref


  //채팅방 드래그 앤 드롭
  const bindLogoPos = useDrag((params) => {
    /*setlogoPos({
      x: params.offset[0],
      y: params.offset[1],
    })*/
    chatPos.x.set(params.offset[0]);
    chatPos.y.set(params.offset[1]);
  });


  const sendMessage = (e) => {
    const { value } = e.target;
    // messageStore.changeInput(value);
  }



  return (

    <animated.div className={styles.container}
      {...bindLogoPos()} style={{
        x: chatPos.x,
        y: chatPos.y
      }}>
      <div className={styles.chatTitle}>
        index
        <button className={styles.exitBtn}>
        <IoCloseOutline onClick={handleChat} size={24} />
      </button>
      </div>
      

      <div className={styles.text}>
        <input
          type="text"
          placeholder="메시지를 입력해주세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>전송</button>
      </div>

    </animated.div>
  )
}

export default ChatRoom