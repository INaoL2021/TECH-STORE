import React, { useState } from 'react';
import './NavBar.css'
import Home from '../../pages/Home/Home';
import Ayuda from '../../pages/Ayuda/Ayuda';
import Catalogo from '../../pages/Catalogo/Catalogo';
import logo from '../../assets/logo.png'
import Searchbar from '../searchBar/SearchBar';
import UserPageConfig from '../../pages/user_page_config/UserPageConfig';

import iconUser from '../../assets/user_logo_none.svg'

function NavBar() {
  const [currentPage, setCurrentPage] = useState('home');
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <div className='nav-all'>
          <div>
            <div className='container-nav'>
              <div className='top-nav'>
                <img className='page-logo' onClick={() => navigateTo('home')} src={logo} alt=""/>
              </div>
              <div className='options-cont'>
                <button className='options-btn' onClick={() => navigateTo('home')}><b>HOME</b></button>
                <button className='options-btn' onClick={() => navigateTo('catalogo')}><b>CATALOGO</b></button>
                <button className='options-btn' onClick={() => navigateTo('ayuda')}><b>AYUDA</b></button>
                <span></span>
              </div>
              <Searchbar />
              <div className='options-cont'>
                <button className='user-logo' onClick={() => navigateTo('userpageconfig')}><img src={iconUser}></img></button>
              </div>
            </div>
            <div className='nav-marquee'>
              <marquee>NO TE OLVIDES DE CREAR UNA CUENTA PARA PODER PARTICIPAR DE UNA COMPUTADORA GAMER! ESTA SE SORTEARA EL 30 DE DICIEMBRE!</marquee>
            </div>
          </div>
        </div>
      </nav>
      {currentPage === 'home' && <Home />}
      {currentPage === 'ayuda' && <Ayuda />}
      {currentPage === 'catalogo' && <Catalogo />}
      {currentPage === 'userpageconfig' && <UserPageConfig />}
    </div>
  );
}

export default NavBar;