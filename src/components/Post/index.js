import React from 'react'
import Spinner from '../../components/Spinner';
import useFetch from '../Fetch';
import './style.css';

import marked from 'marked';
import createDomPurify from 'dompurify';
import { JSDOM } from 'jsdom';

function Post(props) {
  // using fake api until backend is plugged in
  const { response } = useFetch(`http://52.19.37.216:3000/api/article/${props.match.params.id}`, {});

  if (!response) {
    return <div className='spinner-container'>
      <Spinner />
    </div>
  }

  const dompurify = createDomPurify(new JSDOM().window);
  const sanitizedHtml = dompurify.sanitize(marked(response.markdown))

  return (
    < div className='body-container' >
      <div className='container' dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
      <a href='/notes' className='prev-link'>Back</a>
    </div >
  )
}

export default Post;
