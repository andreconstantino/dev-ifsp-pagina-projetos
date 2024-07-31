import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logotype from '../../assets/images/logotype.png'
import './styles.css'

export default function Navbar() {
    const location = useLocation()

    return (
        <div className='navbar-container'>
            <img src={Logotype} className='logotype-dev-comunica' />
            <div className='links'>
                <NavLink exact to={'/'} className={location.pathname === '/' ? 'active-link' : ''}>Conheça PSI</NavLink>
                <NavLink to={'/futmanager'} className={location.pathname === '/futmanager' ? 'active-link' : ''}>Projeto 1 - Futmanager</NavLink>
                <NavLink to={'https://music.youtube.com/watch?v=lu0XVRP_Bfc&list=RDAMVMSeZouxOauPw'}>Redes Sociais</NavLink>
            </div>
        </div>
    )
}

