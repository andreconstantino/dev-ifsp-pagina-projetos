import React from 'react'
import { Navbar, Footer, CardBlue, CardRed, CardComment, Slider } from '../../../components'
import Mockup from '../../../assets/images/mockup-notebook.png'
import './styles.css'
import './mobile.css'
import Tae from '../../../assets/images/comment/tae.png'
import JK from '../../../assets/images/comment/my-love.png'

// icons 
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { TiCloudStorageOutline } from "react-icons/ti";
import { RiCellphoneFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";

// images for slider

import Img6 from '../../../../public/images/print.png'

import Img5 from '../../../../public/images/Captura de tela 2024-11-29 202203.png'


export default function FakeNewsAnalyzer() {

    const images = [
        Img5, Img6
    ]

    return (
        <div>
            <Navbar />
            <div className='container-main-project'>
                <div className='header'>
                    <div className='header-child'>
                        <h1 className='header-title'>Fake News Analyzer</h1>
                        <p className='header-text'>O Fake News Analyzer é um projeto em desenvolvimento, onde os alunos da matéria Práticas em Sociedade e Informática 2 estão atuando como pesquisa
                            dores e desenvolvedores. O principal objetivo dos alunos é impactar positivamente a nossa comunidade, através da tecnologia.
                        </p>
                    </div>
                    
                </div>
                <div className="functionalities">
    <h2 className="title-functionalities">Principais <span style={{ color: '#5960EE' }}>funcionalidades</span></h2>
    <div className="functionalities-container">
        
        
        <CardRed
            icon={<FaMagnifyingGlass />}
            title='Analisar Notícias'
            description='O Fake News Analyzer ajuda você a identificar e combater notícias falsas de forma eficiente. Você pode enviar textos, links ou imagens, e nosso sistema fará uma busca em nossa base de dados, fornecendo uma análise precisa. Se a notícia não estiver registrada, o sistema a analisará e armazenará para futuras consultas.'
        />
        
       
        <CardBlue
            icon={<IoTimeOutline />}
            title='Verificação em Tempo Real'
            description='Com a verificação em tempo real, o Fake News Analyzer oferece análises rápidas e automáticas assim que você envia a notícia. Isso garante que você tenha informações confiáveis e seguras para compartilhar ou desmentir imediatamente.'
        />
        

        <CardRed
            icon={<TiCloudStorageOutline />}
            title='Armazenamento de Notícias'
            description='Cada notícia analisada é armazenada para futuras consultas. Isso significa que você pode acessar facilmente o histórico de análises anteriores, garantindo que você sempre tenha acesso às informações mais recentes e precisas.'
        />
        
       
        <CardBlue
            icon={<RiCellphoneFill />}
            title='Suporte Multicanal'
            description='O Fake News Analyzer está disponível tanto no WhatsApp quanto no Telegram. Isso oferece flexibilidade para que você possa verificar notícias a partir da plataforma de sua escolha, tornando a análise mais acessível e prática.'
        />
    </div>
</div>

                {/* <div className='experiences-container row-container'>
                    <div className='text'>
                        <h1 className='experience-title'>Experiência para os clientes</h1>
                        <p className='experience-subtitle'>Veja como os clientes se sentiram tendo a
                            experiência de terem seu software facilitando o dia a dia deles.</p>
                    </div>
                    <div className='comments'>
                        <CardComment
                            description='"Trabalhei no backend do FutManager, focando em Node.js e MongoDB. 
                                Foi empolgante criar uma API robusta para gerenciar as estatísticas dos jogadores."'
                            img={JK}
                            name='Jungkook BTS'
                            role='dev backend'
                        />
                        <CardComment
                            description='"Trabalhei no backend do FutManager, focando em Node.js e MongoDB. 
                                Foi empolgante criar uma API robusta para gerenciar as estatísticas dos jogadores."'
                            img={JK}
                            name='Jungkook BTS'
                            role='dev backend'
                        />
                        <CardComment
                            description='"Trabalhei no backend do FutManager, focando em Node.js e MongoDB. 
                                Foi empolgante criar uma API robusta para gerenciar as estatísticas dos jogadores. 
                                Ver tudo funcionando bem foi muito gratificante!"'
                            img={Tae}
                            name='Kim Taehyung'
                            role='dev fullstack'
                        />
                    </div>
                </div> */}

                {/*img {gifnote}*/}
                {/* <img src={gifnote} alt="" /> */}
                <div className='about-context'>
                    <div className='about-context-child'>
                    <h1 className='about-context-title'>Como Usar o Bot </h1>
<div className='about-context-subtitle'>
    <GoLocation />
    <p>Guia de Uso | WhatsApp e Telegram</p>
</div>
<p>O **Fake News Analyzer** é um chatbot desenvolvido para ajudar na verificação de notícias e combater a disseminação de informações falsas. Aqui está um passo a passo simples de como utilizar o bot:</p> <br />

<p><b>Passo 1: Inicie a Conversa</b></p>
<p>Abra o WhatsApp ou o Telegram e comece uma conversa com o bot **Fake News Analyzer**.</p>

<p><b>Passo 2: Escolha o Tipo de Notícia</b></p>
<p>Ao iniciar a conversa, o bot vai pedir para você escolher o tipo de notícia que deseja analisar. Você pode escolher entre <b>texto</b>, <b>link</b> ou <b>imagem</b>.</p>

<p><b>Passo 3: Envie a Notícia</b></p>
<p>Envie o texto, link ou imagem da notícia que você quer verificar. O bot irá fazer a busca na base de dados para verificar se ela já foi analisada.</p>

<p><b>Passo 4: Análise e Resultado</b></p>
<p>Se a notícia já estiver na base de dados, o bot retornará a análise rapidamente. Caso contrário, ele realizará a verificação e fornecerá o resultado. Além disso, a notícia será armazenada para futuras consultas.</p>

<p><b>Passo 5: Compartilhe o Resultado</b></p>
<p>O bot vai te informar se a notícia é verdadeira, falsa ou suspeita. Compartilhe o resultado com amigos e ajude a combater as fake news!</p>
                    </div>
                    <Slider images={images} />
                </div>
                <Footer />
            </div>
        </div>
    )
}
