import React, { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const ShowSites = () => {

  const [sites, setSites] = useState([]);
  const [clicked, clickedSite] = useState(null);

  useEffect(() => {
    getSites();
  }, []);

  const getSites = () => {
    ApiService.getAllSites()
      .then(response => {
        setSites(response.data);
        console.log(response.data);
      });
  }

  const setActiveSite = (id) => {
    console.log(id);
    clickedSite(id);
  }

  return(
    <div className="sites">
      <ul className="list-group">
        {sites.map((site, index) =>(
          <li className="list-group-item" onClick={() => setActiveSite(site)} key={index}>
            {site.title}
          </li>
        ))}
      </ul>
    </div>
  );

};

export default ShowSites;
