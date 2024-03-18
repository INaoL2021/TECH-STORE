import React, { useState } from 'react';
import './NavBar.css'
import Home from '../../pages/Home/Home';
import Ayuda from '../../pages/Ayuda/Ayuda';
import Catalogo from '../../pages/Catalogo/Catalogo';
import logo from '../../assets/logo.png'
import Searchbar from '../searchBar/SearchBar';
import DropDownProfile from '../dropDownProfile/DropDownProfile';

import iconUser from '../../assets/user_logo_none.svg'
import UserPageConfig from '../../pages/user_page_config/UserPageConfig';
import Login from '../../pages/User/Login/Login';

function NavBar() {
  const [currentPage, setCurrentPage] = useState('home');
  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  const [openProfile, setOpenProfile] = useState(false);

  // Define los botones/direcciones que quieres incluir dentro del DropDownProfile
  const profileButtons = [
    { label: 'Iniciar Sesión', onClick: () => navigateTo('login') },
    { label: 'Configuración', onClick: () => navigateTo('userpageconfig') }
  ];

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
                <button className='user-logo' onClick={() => setOpenProfile((prev) => !prev)}><img src={iconUser}></img></button>
              </div>
            </div>
            <div className='nav-marquee'>
              <marquee>NO TE OLVIDES DE CREAR UNA CUENTA PARA PODER PARTICIPAR DE UNA COMPUTADORA GAMER! ESTA SE SORTEARA EL 30 DE DICIEMBRE!</marquee>
            </div>
          </div>
        </div>
      </nav>
      {/* Pasa los botones/direcciones como prop al componente DropDownProfile */}
      {openProfile && <DropDownProfile buttons={profileButtons} />}
      {currentPage === 'home' && <Home />}
      {currentPage === 'ayuda' && <Ayuda />}
      {currentPage === 'catalogo' && <Catalogo />}
      {currentPage === 'login' && <Login />}
      {currentPage === 'userpageconfig' && <UserPageConfig />}
    </div>
  );
}

export default NavBar;
