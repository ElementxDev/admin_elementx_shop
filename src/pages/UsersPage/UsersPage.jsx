import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import getUsers from '../../services/getUsers';
function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // window.scrollTo(0, 0);
    async function loadUsers() {
      const response = await getUsers();
      setUsers(response);
      console.log(response);
    }
    loadUsers();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <table className="responsive-table">
        <caption>
          <span> Lista de Usuarios</span>
          <img src="/assets/ElementxOnlineBack.svg" alt="" width={100} />
        </caption>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">email</th>
            <th scope="col">Ordenes</th>
            <th scope="col">Compras</th>
            <th scope="col">Dirección</th>
            <th scope="col">Verificado</th>
            <th scope="col">acciones</th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users?.map((user) => (
              <>
                <tr>
                  <td>{`${user.name} ${user.surname}`}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>{user.orders.length}</td>
                  <td style={{ textTransform: 'capitalize' }}>panama, coclé</td>
                  <td
                    style={{ textTransform: 'capitalize' }}
                  >{`${user.verified}`}</td>

                  <td>acciones</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
