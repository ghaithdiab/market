import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser/LoginUser';
import ErrorPage from './pages/ErrorPage';
import PrivateRoutes from './util/privateRoutes';
import { AuthProvider } from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LayoutApp } from './components/LayoutApp/LayoutApp';
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<LayoutApp/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<LoginUser/>}></Route>
          <Route element={<PrivateRoutes/>}>
            <Route path='/admin' element={<Admin/>}></Route>
          </Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
