import React from 'react';
import Spinner from '../../components/Spinner';
import ListItem from '../../components/ListItem';
import useFetch from '../Fetch';


function Notes() {
  // fake data until backend is plugged in
  const { response } = useFetch('http://52.19.37.216:3000/api/articles', {});

  if (!response) {
    return <div className='spinner-container'>
      <Spinner />
    </div>
  }

  return (
    <section className='body-container'>
      <h2 className='title'>Notes</h2>
      <ul>
        {
          response.map((value, index) => {
            return <ListItem value={value} key={index} />
          })
        }
      </ul>
      <a href='/' className='prev-link'>Back</a>
    </section>
  )
}

export default Notes;
