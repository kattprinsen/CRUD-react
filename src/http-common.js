import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:3333/",
  headers: {
    "Content-type" : "application/json"
  }
});

/*
Speaks with our api, to change it simply
change the baseURL to whatever your API url is.
*/
