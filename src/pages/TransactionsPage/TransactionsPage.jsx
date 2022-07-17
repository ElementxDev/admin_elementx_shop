import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import TableItem from '../../components/TableItem/TableItem';

function TransactionsPage() {
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
