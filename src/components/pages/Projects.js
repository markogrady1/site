import React, { useState, useEffect } from 'react'

require('es6-promise').polyfill();
require('isomorphic-fetch');


function Projects() {
  const [data, setData] = useState([]);

  const usefulProjects = [
    'nasa-data',
    'aray',
    'design-patterns',
    'ember-bootstrap-pagination',
    'jQit',
    'widgetJS',
  ];


  useEffect(() => {
    fetch('https://api.github.com/users/markogrady1/repos?per_page=100')
      .then(response => response.json())
      .then(json => { setData(json) });
  }, []);

  const projects = [];
  if (data) {
    data.map((item, index) => {
      return usefulProjects.map(projectItem => {
        if (item.name === projectItem) {
          return projects.push(item);
        }
        return true;
      })
    })
  }

  return (
    <div className='body-container'>
      <h2 className='title'>Projects</h2>
      <ul>
        {projects.map((item, index) => {
          const datestring = new Date(item.updated_at).toString();
          const readableDate = datestring.split(' GMT')[0];
          return <a key={index} target='_blank' rel='noreferrer' href={'' + item.html_url} className='project-item'>
            <li key={index}>{item.name}
              <p>{readableDate}</p>
            </li>
          </a>
        })}
      </ul>
    </div>
  )
}

export default Projects;
