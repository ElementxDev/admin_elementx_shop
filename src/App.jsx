/*----------------IMPORT LIBRARIES-----------------*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
/*----------------IMPORT PAGE-----------------*/
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import RegisterPage from './pages/AuthPage/RegisterPage';
import SalePages from './pages/SalesPage/SalePages';
import TransactionsPage from './pages/TransactionsPage/TransactionsPage';
import UserPage from './pages/UsersPage/UserPage';
import LoginPage from './pages/AuthPage/LoginPage';
/*----------------IMPORT COMPONENTS-----------------*/
/*----------------IMPORT CONTEXT-----------------*/
import { AuthProvider } from './context/provider/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/sales" element={<SalePages />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
