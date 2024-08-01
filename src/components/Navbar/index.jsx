import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logotype from '../../assets/images/logotype.png';
import './styles.css';
import { FaBars } from 'react-icons/fa'; // Adicione esta importação para o ícone hamburguer
import { AiOutlineClose } from 'react-icons/ai'; // Adicione esta importação para o ícone de fechar

export default function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='navbar-container'>
            <img src={Logotype} className='logotype-dev-comunica' alt='Logotype' />
            <div className='menu-icon' onClick={toggleMenu}>
                {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
            </div>
            <div className={`overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
            <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                <NavLink exact to='/' className={location.pathname === '/' ? 'active-link' : ''}>
                    Conheça PSI
                </NavLink>
                <NavLink to='/futmanager' className={location.pathname === '/futmanager' ? 'active-link' : ''}>
                    Projeto 1 - Futmanager
                </NavLink>
                <NavLink to='https://music.youtube.com/watch?v=lu0XVRP_Bfc&list=RDAMVMSeZouxOauPw'>
                    Redes Sociais
                </NavLink>
            </div>
        </div>
    );
}
