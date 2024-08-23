import React, { useState } from 'react'
import { Navbar, Footer, AutomaticSlider, CardComment } from '../../components'
import Ilustration1 from '../../assets/images/ilustration-1.png'
import Ilustration2 from '../../assets/images/ilustration-2.png'
import TeacherAndre from '../../assets/images/professor-andre.png'
import { Link } from 'react-router-dom'
import './styles.css'
import './mobile.css'

// isso aqui vai ir pro componente
import JK from '../../assets/images/comment/jungkook.png'
import Tae from '../../assets/images/comment/tae.png'

import Avatar from '../../assets/images/comment/avatar.jpg'

// melhorar o nome
import Girl from '../../assets/images/meninaaa.png'

export default function Home() {
    // configs da sidebar
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleSubMenu = (item) => {
        setExpandedItem(prevItem => (prevItem === item ? null : item));
    };

    return (
        <div>
            <Navbar />
            <div className='container-main-home'>
                {/* <img src={Ilustration1} className='ilustration-1' /> */}
                <div className='header'>
                    <div className='header-child'>
                        <h1 className='main-title'>Você sabe <br /><span style={{ color: '#5960EE' }}>o que é PSI</span>?</h1>
                        <h2 className='main-subtitle'><span style={{ color: '#F24150' }}>venha conhecer</span> um pouco</h2>
                    </div>
                    <div className='header-child'>
                        <p>PSI, Práticas em Sociedade e Informática, é uma <span style={{ color: '#F24150' }}>disciplina do curso de
                            Análise e Desenvolvimento de Sistemas</span> que integra conhecimento científico
                            às necessidades comunitárias. Ela aborda a cultura extensionista, aspectos
                            legais, documentação do IFSP, metodologias de pesquisa e desenvolvimento
                            de projetos de extensão, com <span style={{ color: '#F24150' }}>o estudante como protagonista.</span></p>
                    </div>
                </div>
                {/* <img src={Ilustration2} className='ilustration-2' /> */}
                <div className='about'>
                    <div className='about-child'>
                        <h3 className='subtitle'>Mas qual a definição de “extensionista” neste contexto?</h3>
                        <p style={{ textAlign: 'justify', fontSize: '14px', lineHeight: '28px' }}>“Atividades
                            extensionistas, em sua essência, consistem em criar atividades práticas
                            que estejam relacionadas às disciplinas cursadas. Para assim, conectar alunos e a
                            sociedade. As atividades extensionistas são obrigatórias e distribuídas ao longo
                            do curso, devendo corresponder a 10% da carga horária do curso.”</p>
                    </div>
                    <div className='about-child tags-container'>
                        <div className='tags-1'>
                            <p className='tag'>compartilhamento de experiências de extensão</p>
                            <p className='tag'>formação integral</p>
                        </div>
                        <div className='tags-2'>
                            <p className='tag'>conhecimentos do curso</p>
                            <p className='tag'>interação com a comunidade local</p>
                        </div>
                        <div className='tags-3'>
                            <p className='tag'>protagonismo estudantil</p>
                            <p className='tag'>projetos comunitários</p>
                        </div>
                    </div>
                </div>
                <div className='slider-section'>
                    <h3 className='slider-title'>Conheça alguns dos devs</h3>
                    <p className='slider-subtitle'>essas são as subequipes de desenvolvedores do projeto 1,
                        realizado no 3° semestre de 2024</p>
                </div>
                <AutomaticSlider />
                <div className='teacher-container'>
                    <img src={TeacherAndre} className='teacher-img' />
                    <div className='teacher-text'>
                        <h1 className='teacher-name'>André Constantino da Silva</h1>
                        <p className='teacher-subtitle'>Docente da disciplina no período do 1° semestre de 2024</p>
                        <p className='teacher-about'>Possui graduação em Ciência da Computação pela Universidade
                            Federal de Goiás (2002), mestrado em Ciência da Computação pela Universidade Federal
                            de São Carlos (2005) e doutorado em Ciência da Computação pelo Instituto de Computação
                            da Universidade Estadual de Campinas (2014). Desde 2012 é professor no Instituto Federal
                            de Educação, Ciência e Tecnologia de São Paulo (IFSP) campus Hortolândia, onde desenvolve
                            pesquisas sobre interfaces de usuário, multimodalidade, mobilidade, educação e
                            desenvolvimento de aplicativos educacionais. Tem experiência na área de Ciência da
                            Computação, com ênfase em Interação Humano-Computador e Engenharia de Software.</p>
                    </div>
                </div>
                <div className='experiences-container'>
                    <h1 className='experience-title'>Experiência de crescimento</h1>
                    <p className='experience-subtitle'>Veja como os estudantes se sentiram tendo a experiência de “colocar a mão na massa”</p>
                    <div className='slider-comment-container'>
                        <div className='slide-comment-track'>
                            <CardComment
                                description='"Fazer parte da equipe desenvolvedora do projeto envolveu atividades muito ricas para nossa experiência 
                                acadêmica. Trabalhar no Futmanager demonstrou, de maneira próxima à realidade, como é estar envolvido num grande projeto 
                                construído por tecnologias de desenvolvimento atuais e composto por grandes times."'
                                img={Avatar}
                                name='Andrey de Assis'
                                role='Desenvolvimento'
                            />
                            <CardComment
                                description='"Foi uma ótima experiência para mostrar que nunca estamos totalmente preparados, não importa a faculdade 
                                pronta que você tem, sempre terá que aprender mais para alcançar os objetivos"'
                                img={Avatar}
                                name='Phelipe Gonçalves'
                                role='Desenvolvimento'
                            />
                            <CardComment
                                description='"Um projeto de extensão com a sociedade representa uma ponte vital entre o conhecimento acadêmico e as 
                                necessidades reais das comunidades. Aqui no IFSP,  a extensão se manifesta como uma missão de aplicar os saberes 
                                adquiridos em benefício da sociedade em geral, promovendo não apenas o desenvolvimento técnico e científico, mas 
                                também o engajamento cidadão e a melhoria da qualidade de vida."'
                                img={Avatar}
                                name='Sabrina Campos'
                                role='Desenvolvimento'
                            />
                            <CardComment
                                description='"O projeto une os  estudantes e professores, para elaboração de um sistema de escolinha de futebol comunitária, 
                                a qual precisava de uma administração mais ágil, para não acumular muito serviço aos voluntários. "'
                                img={Avatar}
                                name='Gibran Khalil'
                                role='Desenvolvimento'
                            />
                            <CardComment
                                description='"Os benefícios são mútuos. Os acadêmicos ganham experiências profissionais na tecnologia, trabalhando como se fosse 
                                uma empresa, enquanto os participantes da comunidade recebem o sistema que auxilia no seu dia a dia."'
                                img={Avatar}
                                name='Julia Barbosa'
                                role='Desenvolvimento'
                            />
                            <CardComment
                                description='"Fiz parte da Equipe de Mídias e foi uma experiência incrível participar desse projeto.
                                Construímos a identidade visual de nosso Instagram, para trazer um conteúdo informativo e criativo ao mesmo tempo."'
                                img={Avatar}
                                name='Elisa Reis'
                                role='Mídias Sociais'
                            />
                            <CardComment
                                description='"Participar do projeto de extensão para melhorar o código do site da ONG "Futpaz" foi uma experiência interessante, 
                                apesar dos desafios. Trabalhar na otimização do site ofereceu uma boa oportunidade para aplicar conhecimentos técnicos, mas houve 
                                alguns obstáculos com a configuração da máquina virtual que complicaram o processo. Ainda assim, a experiência contribuiu para o 
                                desenvolvimento das minhas habilidades."'
                                img={Avatar}
                                name='Camilly Lima'
                                role='Desenvolvimento'
                            />
                            <CardComment
                                description='"Trabalhei no backend do FutManager, focando em Node.js e MongoDB. 
                                Foi empolgante criar uma API robusta para gerenciar as estatísticas dos jogadores. 
                                Ver tudo funcionando bem foi muito gratificante!"'
                                img={Avatar}
                                name='Kim Taehyung'
                                role='dev fullstack'
                            />
                            <CardComment
                                description='"Trabalhei no backend do FutManager, focando em Node.js e MongoDB. 
                                Foi empolgante criar uma API robusta para gerenciar as estatísticas dos jogadores."'
                                img={Avatar}
                                name='Jungkook BTS'
                                role='dev backend'
                            />
                            <CardComment
                                description='"Trabalhei no backend do FutManager, focando em Node.js e MongoDB. 
                                Foi empolgante criar uma API robusta para gerenciar as estatísticas dos jogadores. 
                                Ver tudo funcionando bem foi muito gratificante!"'
                                img={Avatar}
                                name='Kim Taehyung'
                                role='dev fullstack'
                            />
                        </div>
                    </div>
                </div>
                <div className='projects-container'>
                    <h1 className='projects-title'>Conheça os <b>projetos desenvolvidos</b></h1>
                    <div className='btn-projects-container'>
                        <Link to='/futmanager' className='btn-for-project'><button className='active-link'>projeto 1 - 3° semestre de 2024</button></Link>
                        <Link to='/project2' className='btn-for-project'><button>projeto 2 - 4° semestre de 2024</button></Link>
                        <Link to='/project3' className='btn-for-project'><button>projeto 3 - 5° semestre de 2024</button></Link>
                    </div>
                </div>
                <div className="social-medias-container">
                    <p className="social-media-text">E você também pode ficar ainda mais por dentro da rotina dos estudantes acessando nossas</p>
                    <p className="social-media-title">Redes Sociais</p>
                    <div className="final-content">
                        <img src={Girl} style={{ width: '450px', marginTop: '60px', marginRight: '12%' }} />
                        <div className="frame-container">
                            <iframe id="frame" src="https://www.instagram.com/p/C5kBrpJOiWS/embed"></iframe>
                            <p className="profile-name">@dev.comunica</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

