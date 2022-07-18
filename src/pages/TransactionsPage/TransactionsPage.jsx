import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import TableItem from '../../components/TableItem/TableItem';
import { useAuth } from '../../context/provider/AuthContext';
import getOrders from '../../services/getOrders';
function TransactionsPage() {
  const [order, setOrder] = useState([]);
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    const verifyLogin = () => {
      if (!isLoggedIn) {
        navigate('/');
      }
    };
    const loadOrders = async () => {
      const response = await getOrders();
      setOrder(response);
    };
    verifyLogin();
    loadOrders();
  }, []);
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="contentHead">
          <Navbar />
        </div>
        <div className="tableWrapper">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>email</th>
                <th>Verificado</th>
                <th>compras</th>
                <th>dirección</th>
                <th>telefono</th>
              </tr>
            </thead>
            <tbody>
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
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

export default TransactionsPage;
