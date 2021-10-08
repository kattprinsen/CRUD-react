import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    showUsers();
  }, []);

  const showUsers = () => {
    ApiService.getUsers()
      .then(response => {
        setUsers(response.data)
      });
  };


  return(
    <div className="users">
      <h2> Users </h2>
      <ul className="list-group">
        {users.map((user, index) =>(
          <li className="list-group-item" key={index}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  )

};

export default Users;
