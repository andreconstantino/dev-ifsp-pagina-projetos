import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiInstagramLine } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa6'
import LogotypeWhite from '../../assets/images/logotype-white.png'
import './styles.css'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-main-content'>
                <div className='item'>
                    <img src={LogotypeWhite} className='img-footer' />
                </div>
                <div className='item'>
                    <a href="">Relatório da disciplina de PSI</a>
                    <a href="">Documentação do projeto Futmanager</a>
                </div>
                <div className='item'>
                    <div className='item-link'>
                        <RiInstagramLine size={24} />
                        <a href="">futpazescolinha</a>
                    </div>
                    <div className='item-link'>
                        <FaGithub size={24} />
                        <a href="">Futmanager</a>
                    </div>
                </div>
                <div className='item item-contact'>
                    <p className='contact-p'>Contate-nos</p>
                    <div className='btn-container'>
                        <a href="">
                            <button className='btn-primary'>Ir para o WhatsApp</button>
                        </a>
                        <a href="">
                            <button className='btn-secondary'>Enviar e-mail</button>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-final-line'>
                <p>© Todos os direitos reservados por Dev Comunica, IFSP Hortolândia</p>
                <div className='links'>
                    <div className='item-link'>
                        <HiOutlineMail size={24} />
                        <a href="">dev.comunicaifsp@gmail.com</a>
                    </div>
                    <div className='item-link'>
                        <RiInstagramLine size={24} />
                        <a href="">dev.comunica</a>
                    </div>
                    <div className='item-link'>
                        <FaGithub size={24} />
                        <a href="">dev-comunica-web</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
