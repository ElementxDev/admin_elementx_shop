import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import TableItem from '../../components/TableItem/TableItem';
import { useAuth } from '../../context/provider/AuthContext';
import getProducts from '../../services/getProducts';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { isLoggedIn } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    const verifyLogin = () => {
      if (!isLoggedIn) {
        navigate('/');
      }
    };
    const loadProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };

    verifyLogin();
    loadProducts();
  }, []);
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="contentHead">
          <Navbar />
        </div>
        <div className="tableWrapper">
          <h1 className="title">Lista de Productos</h1>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Categoria</th>
                <th>Precios</th>
                <th>Stock</th>
                <th>rating</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => {
                return <TableItem key={index} product={product} />;
              })}
              <TableItem />
            </tbody>
          </table>

          <div className="paginationContainer">
            <div className="pagination">
              <button>Anterior</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
