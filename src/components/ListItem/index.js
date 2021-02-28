import React from 'react'
import './style.css';

function ListItem(props) {

  return (
    <a className='list-link' href={'/post/' + props.value._id}>
      <li className='__list-item' key={props.value.key}>
        {props.value.title}
      </li>
      <p className='list-item-date'>Jan 17 2021</p>
    </a >
  )
}

export default ListItem;