import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import ErrorPage from './pages/ErrorPage';
import RequireAuth from './util/RequireAuth';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LoginUser/>}></Route>
        <Route element={<RequireAuth/>}>
          <Route path='/admin' element={<Admin/>}></Route>
        </Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
