import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import getProducts from '../../services/getProducts';
import Navbar from '../../components/Navbar/Navbar';
function ProductPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // window.scrollTo(0, 0);
    async function loadProduct() {
      const response = await getProducts();
      setProducts(response);
      console.log(response);
    }
    loadProduct();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <table className="responsive-table">
        <caption>
          <span> Lista de Productos</span>
          <img src="/assets/ElementxOnlineBack.svg" alt="" width={100} />
        </caption>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">precio</th>
            <th scope="col">Valoración</th>
            <th scope="col">stock</th>
            <th scope="col">categoria</th>
            <th scope="col">Marca</th>
            <th scope="col">acciones</th>
          </tr>
        </thead>

        <tbody>
          {products &&
            products?.map((product) => (
              <>
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                  <td>{product.stock}</td>
                  <td>{product.category.name}</td>
                  <td>{product.brand}</td>
                  <td>acciones</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
