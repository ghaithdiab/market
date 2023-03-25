import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginUser/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
