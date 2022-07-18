/*----------------IMPORT LIBRARIES-----------------*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
/*----------------IMPORT PAGE-----------------*/
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/AuthPage/RegisterPage';
import LoginPage from './pages/AuthPage/LoginPage';
import CreateProduct from './pages/CreateProduct/CreateProduct';
/*----------------IMPORT COMPONENTS-----------------*/
/*----------------IMPORT CONTEXT-----------------*/
import { AuthProvider } from './context/provider/AuthContext';
import NoData from './components/NoData/NoData';

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
            <Route path="*" element={<NoData />} />
          </Routes>

          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
