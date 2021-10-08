import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const Devices = () => {

  const [devices, setDevices] = useState([]);
  const [currentDevice, setCurrentDevice] = useState(null);

  useEffect(() => {
    showDevices();
  }, []);

  const showDevices = () => {
    ApiService.getDevices()
      .then(response => {
        setDevices(response.data)
      });
  };

  const setActiveDevice = (device) => {
    console.log(device);
    setCurrentDevice(device);
  }

  return(
    <div className="devices">
      <ul className="list-group">
        {devices.map((device, index) => (
          <li className="list-group-item cursor-pointer" onClick={() => setActiveDevice(device)} key={index}>
            {device.title}
          </li>
        ))}
      </ul>
      <br />
        <div className="col-md-6">
        {currentDevice ? (
          <div>
            <h4> Device information </h4>
            <div>
              <label>
                <strong> Title: </strong>
              </label>{" "}
              {currentDevice.title}
            </div>
            <div>
              <label>
                <strong> Description: </strong>
              </label>{" "}
              {currentDevice.description}
            </div>
            <div>
              <label>
                <strong> Model: </strong>
              </label>{" "}
              {currentDevice.model}
            </div>
          </div>
        ) : (
          <div>
            <p> Please click on something </p>
          </div>
        )}
        </div>
      </div>

  );

};

export default Devices;
