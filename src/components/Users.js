import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const Users = () => {

  const [users, setUsers] = useState([]);
  const [sites, setSites] = useState([]);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    showUsers();
  }, []);

  const showUsers = () => {
    ApiService.getUsers()
      .then(response => {
        setUsers(response.data)
      });
  };

  const getSite = (user) => {
    console.log(user);
    ApiService.getSite(user.id)
      .then(response => {
        console.log(response);
        setSites(response.data)
      });
  };

  const getDevices = (site) => {
    ApiService.getDevice(site.id)
      .then(response => {
        console.log(response);
        setDevices(response.data)
      });
  }


  return(
    <div className="users">
      <h2> Users </h2>
      <ul className="list-group">
        {users.map((user, index) =>(
          <li className="list-group-item" onClick={() => getSite(user)} key={index}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  )

};

export default Users;
