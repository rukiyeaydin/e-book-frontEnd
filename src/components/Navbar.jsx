import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { Link, useLocation } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import { BiSolidPencil } from 'react-icons/bi'
import aurora from '../images/blackaurora.jpg';
import logo from '../images/Rkm.png';
import Dropdown from './dropdown/Dropdown';
import Modal from './modal/Modal';

const Navbar = () => {
  const location = useLocation();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const[openNavbar, SetOpenNavbar] = useState(false);
  const handleClick = () => SetOpenNavbar(!openNavbar);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Dış tıklamayı yakalayacak işlev
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    useEffect(() => {
      // Sayfa her yenilendiğinde dış tıklamayı dinle
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        // Sayfa yenilenirken event listener'ı kaldır
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);

  return (
    <div className={openNavbar ?  "navbar" : "navbar active"} id='top'>
      <Link to="/" className='navbar-logo' style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img src={logo} alt="logo" className='logo'/><h3 className='font-bold'>RKM</h3></Link>
      <Modal />

      <ul className={openNavbar ?  "navbar-menu active" : "navbar-menu"}>
          <li><Link to="/" className={`navbar-links ${location.pathname === '/' ? 'active' : ''}`}>Anasayfa</Link></li>
          <li><Link to="/kategoriler" className={`navbar-links ${location.pathname === '/kategoriler' ? 'active' : ''}`}>Kategoriler</Link></li>
          <li>
            <Link to="/yaz" className={`navbar-links ${location.pathname === '/yaz' ? 'active' : ''}`}>
              <div className="yaz">
                <BiSolidPencil className='pencil'/>
                <p>Yaz</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className={`navbar-links ${location.pathname === '/Profile' ? 'active' : ''}`}>
            <div ref={dropdownRef}>
              <img src={aurora} alt="profil" className='profilresmi' onClick={toggleDropdown} />
              {isDropdownOpen && <Dropdown />}
            </div>
            </Link>
          </li>
        </ul>
        {/* {isDropdownOpen && <Dropdown />} */}
        <div className="acKapaMenu" onClick={handleClick}>
            {openNavbar ? <FaTimes /> : <FaBars />}
        </div>
    </div>
  )
}

export default Navbar