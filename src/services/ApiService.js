import http from '../http-common';

//Get all the sites
const getAllSites = () => {
  return http.get('/sites');
};

//Get site based on site_id
const getSite = id => {
  return http.get(`/sites/${id}`);
};

//Get devices
const getDevices = () => {
  return http.get('/devices');
};

//Get device on site_id
const getDevice = id => {
  return http.get(`/devices/${id}`);
};

const getUsers = () => {
    return http.get('/users');
};

const getUser = id => {
  return http.get(`/users/${id}`);
}

//CreateSite NOT IMPLEMENTED
/*const createSite = () => {
  return http.post('/sites', data);
}*/

//UpdateSite NOT IMPLEMENTED
/*const updateSite = (id, data) => {
  return http.put(`/sites/${id}`);
}*/

//RemoveSite NOT IMPLEMENTED
/*const removeSite = id => {
  return http.delete(`/sites/${id}`);
}*/

export default {
  getAllSites,
  getSite,
  getDevices,
  getDevice,
  getUsers,
  getUser
  //createSite,
  //UpdateSite,
  //removeSite,
};
