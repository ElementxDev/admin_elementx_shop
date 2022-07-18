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
            <Route path="*" element={<NoData />} />
          </Routes>

          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
