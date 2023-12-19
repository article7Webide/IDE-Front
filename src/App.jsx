import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/LoginPage/SignIn';
import SignUp from './pages/RegisterPage/SignUp';
import Mypage from './pages/MyPage/Mypage';
import MainPage from './pages/MainPage/MainPage';
import Editer from './pages/Editer/Editer';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/editor" element={<Editer/>} />
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
      </Routes>
      
    </>
  );
}

export default App;
