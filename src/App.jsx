/*----------------IMPORT LIBRARIES-----------------*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

/*----------------IMPORT COMPONENTS-----------------*/
import NoData from './components/NoData/NoData';
/*----------------IMPORT CONTEXT-----------------*/
import { AuthProvider } from './context/provider/AuthContext';
/*----------------IMPORT PAGE-----------------*/
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/AuthPage/RegisterPage';
import LoginPage from './pages/AuthPage/LoginPage';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import CreateCategory from './pages/CreateCategory/CreateCategory';
import CreateUser from './pages/CreateUser/CreateUser';
import ProductPage from './pages/ProductPage/ProductPage';
import UsersPage from './pages/UsersPage/UsersPage';
import OrderPage from './pages/OrderPage/OrderPage';
import SalesPage from './pages/SalesPage/SalesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* <Route path="/dashboard" element={<HomePage />} /> */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/add-product" element={<CreateProduct />} />
            <Route path="/add-category" element={<CreateCategory />} />
            <Route path="/add-user" element={<CreateUser />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="*" element={<NoData />} />
          </Routes>

          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
