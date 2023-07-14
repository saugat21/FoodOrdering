import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Updateproduct from './pages/Admin/UpdateProduct'
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';




function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/product/:slug' element={<ProductDetails />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<Dashboard />} />
          <Route path='user/orders' element={<Orders />} />
          <Route path='user/profile' element={<Profile />} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/create-category' element={<CreateCategory />} />
          <Route path='admin/create-food' element={<CreateProduct />} />
          <Route path='admin/products' element={<Products />} />
          <Route path='admin/product/:slug' element={<Updateproduct />} />
          <Route path='admin/users' element={<Users />} />
        </Route>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
