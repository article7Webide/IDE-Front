import React, { useState } from 'react'
import styles from './CreateDir.module.scss'
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';

const CreateDir = ({ modalIsOpen, handleModal }) => {

  // const [selected, setSelected] = useState("public");
  const [registerDir, setRegisterDir] = useState({
    folder_name: "",
    folder_description: "",
    scope: "",
    stack: "",
  });

  const stacks = ["Java", "Python", "C++", "Javascript"];
  const [openStack, setOpenStack] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDir((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const handleMenu = () => {
    setOpenStack(!openStack);
  }

  const handleStack = (param, e) => {
    setRegisterDir((prevValues) => ({ ...prevValues, stack: param }));
    setOpenStack(!openStack);
    // setRegisterDir({stack: param});
  }

  const handleCreate = async () => {
    try {
      const res = await axios.post(
        "http://13.125.30.49:8080/auth/projects",
        {
          folder_name: registerDir.folder_name,
        }
      );
      if (res.status === 201) {
        // 성공 로직
        if (res.data) {
          const newPro = res.data;
          console.log("newPro",newPro);
          localStorage.setItem('project', JSON.stringify(newPro));
          window.location.reload();
        } else {
          alert("프로젝트 생성에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    }
    catch (error) {

    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.topbox}>
        <div className={styles.create__title}>
          <h3>컨테이너 생성하기</h3>
          <button>
            <IoCloseOutline onClick={handleModal} size={24} />
          </button>

        </div>

        <div className={styles.contents}>
          <div className={styles.topbox__div}>
            <label className={styles.labelst}>이름</label>
            <input
              type='text'
              name='folder_name'
              value={registerDir.folder_name}
              onChange={handleChange}
              className={styles.dirinput}
            />
          </div>
          <div className={styles.topbox__div}>
            <label className={styles.labelst}>설명</label>
            <input
              type='text'
              name='folder_description'
              value={registerDir.folder_description}
              onChange={handleChange}
              className={styles.desinput}
            />
          </div>
          <div className={styles.topbox__divspen}>
            <label className={styles.labelst}>공개 범위</label>
            <input
              type='radio'
              name='scope'
              value='public'
              checked={registerDir.scope === "public"}
              onChange={handleChange}
            />
            <label>public</label>
            <input
              type='radio'
              name='scope'
              value='private'
              checked={registerDir.scope === "private"}
              onChange={handleChange}
            />
            <label>private</label>
          </div>
          <div className={styles.topbox__div}>
            <label className={styles.labelst}>컨테이너 스택</label>
            <div
              type='text'
              name='stack'
              value={registerDir.stack}
              className={styles.selec__stack}
              onClick={handleMenu}
            >
              {registerDir.stack} <span><IoIosArrowDown /></span>
            </div>
            {openStack &&
              <div className={styles.menucontainer}>
                {stacks.map((stack, index) => (
                  <li value={stack} name='stack' className={styles.menu_li} onClick={(e) => handleStack(stack, e)}>
                    {stack}
                  </li>
                ))}
              </div>
            }
          </div>
          <hr />
          <button onClick={handleCreate}>생성하기</button>
        </div>
      </div>
    </div>
  )
}

export default CreateDir