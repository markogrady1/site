import React from 'react'
import './style.css';

function Spinner() {
  return (
    <div className="block">
      <p className="double">
        <span className="ouro ouro3">
          <span className="left"><span className="anim"></span></span>
          <span className="right"><span className="anim"></span></span>
        </span>
      </p>
    </div>
  );
}

export default Spinner
