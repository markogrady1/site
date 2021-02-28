import React, { useState, useEffect } from 'react';
// import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  useEffect(() => {
    // showButton();
  }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BEEPBOP&nbsp;
            <i className='fas fa-adjust' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/notes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Notes
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/bookmarks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bookmarks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
