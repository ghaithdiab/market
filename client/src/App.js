import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser/LoginUser';
import ErrorPage from './pages/ErrorPage';
import PrivateRoutes from './util/privateRoutes';
import { AuthProvider } from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { LayoutApp } from './components/LayoutApp/LayoutApp';
import Dashboard from './pages/Dashboard/Dashboard';
import { ProductsPage } from './pages/Products/ProductsPage';
import { Suspense } from 'react';

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={null}>
          <Routes>
            {/* <Route path='/' element={<LayoutApp/>}> */}
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={<LoginUser/>}></Route>
              <Route element={<PrivateRoutes/>}>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/dashboard/products' element={<ProductsPage/>}></Route>
              </Route>
              <Route path='*' element={<ErrorPage/>}></Route>
            {/* </Route> */}
          </Routes>
      </Suspense>
     </AuthProvider>
  );
}

export default App;
