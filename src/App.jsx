import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/LoginPage/SignIn';
import SignUp from './pages/RegisterPage/SignUp';
import Mypage from './pages/MyPage/Mypage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/mypage" element={<Mypage/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
