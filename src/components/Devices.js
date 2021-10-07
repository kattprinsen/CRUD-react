import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const Devices = () => {

  const [devices, setDevices] = useState([]);

  useEffect(() => {
    showDevices();
  }, []);

  const showDevices = () => {
    ApiService.getDevices()
      .then(response => {
        setDevices(response.data)
      });
  };

  return(
    <div className="devices">
      <ul className="list-group">
        {devices.map((device, index) => (
          <li className="list-group-item" /*onClick={() => setDevice()}*/ key={index}>
            {device.title}
          </li>
        ))}
      </ul>
    </div>
  );

};

export default Devices;
