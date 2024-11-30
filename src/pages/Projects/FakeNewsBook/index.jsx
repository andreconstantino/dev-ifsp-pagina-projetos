import React from 'react'
import { Navbar, Footer, CardBlue, CardRed, CardComment, Slider } from '../../../components'
import Mockup from '../../../assets/images/mockup-notebook.png'
import './styles.css'
import './mobile.css'
import Tae from '../../../assets/images/comment/tae.png'
import JK from '../../../assets/images/comment/my-love.png'

// icons 
import { PiJoystick } from "react-icons/pi";
import { MdOutlineSavings } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { RiCellphoneFill } from "react-icons/ri";
import { MdOutlineTouchApp } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { BsCardChecklist } from "react-icons/bs";





// images for slider

import Img6 from '../../../../public/images/fakenewsbook1.png'
import Img7 from '../../../../public/images/fakenewsbook2.png'
import Img5 from '../../../../public/images/fakenewsbook3.png'




export default function Fake

() {

    const images = [
        Img5, Img7,Img6
    ]

    return (
        <div>
            <Navbar />
            <div className='container-main-project'>
                <div className='header'>
                <div className='header-child'>
                    <h1 className='header-title'>Fake News Book</h1>
                        <p className='header-text'>O **Fake News Book** é um projeto em desenvolvimento, onde os alunos da matéria Práticas em Sociedade e Informática 2 estão atuando como pesquisadores e desenvolvedores. O principal objetivo dos alunos é impactar positivamente a nossa comunidade, através da tecnologia. O sistema tem como foco a verificação e o combate à disseminação de notícias falsas, fornecendo uma plataforma colaborativa para análise e armazenamento de fake news.</p>
</div>

                    
                </div>
                <div className="functionalities">
    <h2 className="title-functionalities">Principais <span style={{ color: '#5960EE' }}>funcionalidades</span></h2>
    <div className="functionalities-container">
    <CardRed
        icon={<FaRegNewspaper />}
        title='Interface de Análise de Notícias'
        description='O **Fake News Book** serve como a interface do sistema, funcionando como um intermediário entre a base de dados de fake news e o usuário. Ele permite que os usuários realizem verificações rápidas de notícias, seja por texto, link ou imagem, e forneça resultados confiáveis e precisos para combater a disseminação de informações falsas.'
    />
    
    <CardBlue
        icon={<MdOutlineTouchApp  />}
        title='Interação com Notícias'
        description='O **Fake News Book** permite interações com as notícias analisadas, como a possibilidade de deixar comentários, avaliações e até anexar novas notícias falsas. Essa funcionalidade enriquece a base de dados, tornando-a mais robusta e colaborativa.'
    />
    
    <CardRed
        icon={<BsCardChecklist />}
        title='Cadastro e Exibição de Fake News'
        description='Com o **Fake News Book**, você pode cadastrar novas fake news, selecionar notícias já analisadas e exibi-las em uma interface organizada. A plataforma facilita o acesso a informações verificadas, permitindo que os usuários vejam, revisitem e compartilhem os resultados das análises.'
    />
    
    <CardBlue
        icon={<RiCellphoneFill />}
        title='Suporte Multicanal'
        description='O **Fake News Book** está disponível tanto no WhatsApp quanto no Telegram, permitindo que você verifique notícias através de diferentes plataformas. Essa flexibilidade torna o processo de análise de notícias mais acessível e conveniente, ajudando mais pessoas a combaterem fake news de maneira prática.'
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
        <h1 className='about-context-title'>Como Usar o Fake News Book</h1>
        <div className='about-context-subtitle'>
            <GoLocation />
            <p>Guia de Uso | Site Fake News Book</p>
        </div>
        <p>O **Fake News Book** é uma plataforma que permite a verificação de fake news, onde os usuários podem interagir com notícias falsas, comentá-las, avaliá-las e até adicionar novas informações à base de dados. Aqui está um passo a passo simples de como utilizar o site:</p> <br />

        <p><b>Passo 1: Acesse o Site</b></p>
        <p>Abra o navegador e acesse o site do **Fake News Book**. Ao entrar, você será apresentado a uma interface intuitiva, onde poderá explorar notícias verificadas e interagir com elas.</p>

        <p><b>Passo 2: Explore as Notícias</b></p>
        <p>Na página inicial, você verá uma lista de notícias que foram analisadas. Você pode navegar pela lista ou usar a ferramenta de pesquisa para encontrar notícias específicas.</p>

        <p><b>Passo 3: Interaja com as Notícias</b></p>
        <p>Para cada notícia, você pode deixar um comentário, avaliar a veracidade ou até mesmo sugerir uma notícia que ainda não foi analisada. O site permite que você contribua ativamente na construção do banco de dados de fake news.</p>

        <p><b>Passo 4: Adicione uma Nova Fake News</b></p>
        <p>Se você encontrar uma notícia falsa que ainda não foi cadastrada, pode adicionar ela ao sistema. O processo de cadastro é simples: basta preencher os detalhes da notícia e enviá-la para análise. A plataforma então a analisará e a adicionará à base de dados.</p>

        <p><b>Passo 5: Acompanhe a Análise e Compartilhe os Resultados</b></p>
        <p>Após a análise de uma notícia, o sistema mostrará os resultados: se ela é verdadeira, falsa ou suspeita. Você poderá visualizar a análise detalhada, interagir com outras pessoas sobre o assunto e compartilhar as informações com a comunidade para combater as fake news.</p>
    </div>
    <Slider images={images} />
</div>
                <Footer />
            </div>
        </div>
    )
}
