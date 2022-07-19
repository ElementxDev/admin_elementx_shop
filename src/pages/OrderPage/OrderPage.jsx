import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import getOrders from '../../services/getOrders';
function OrderPage() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    // window.scrollTo(0, 0);
    async function loadOrders() {
      const response = await getOrders();
      setOrders(response);
      console.log(response);
    }
    loadOrders();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <table className="responsive-table">
        <caption>
          <span> Lista de Ordenes</span>
          <img src="/assets/ElementxOnlineBack.svg" alt="" width={100} />
        </caption>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">email</th>
            <th scope="col">Productos</th>
            <th scope="col">direccion</th>
            <th scope="col">Valor</th>
            <th scope="col">Estado</th>
            <th scope="col">acciones</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders?.map((order) => (
              <>
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.totalItems}</td>
                  <td>{order.country}</td>
                  <td>$ {order.amount}</td>
                  <td>{order.orderStatus}</td>
                  <td>acciones</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default OrderPage;
