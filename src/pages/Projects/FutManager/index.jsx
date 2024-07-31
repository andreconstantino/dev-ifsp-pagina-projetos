import React from 'react'
import { Navbar, Footer, CardBlue, CardRed, CardComment, Slider } from '../../../components'
import Mockup from '../../../assets/images/mockup-notebook.png'
import './styles.css'
import gifnote from '../../../assets/images/gifnote.gif';
import Tae from '../../../assets/images/comment/tae.png'
import JK from '../../../assets/images/comment/my-love.png'

// icons 
import { PiJoystick } from "react-icons/pi";
import { MdOutlineSavings } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

export default function FutManager() {

    const images = [
        'src/assets/images/futmanager/img1.png',
        'src/assets/images/futmanager/img2.png',
        'src/assets/images/futmanager/img3.png'
    ]

    return (
        <div>
            <Navbar />
            <div className='container-main-project'>
                <div className='header'>
                    <div className='header-child'>
                        <h1 className='header-title'>Futmanager</h1>
                        <p className='header-text'>O FutManager, desenvolvido por Luciano Marin e Nathan Reuter em 2016, é
                            um <span style={{ color: '#5960EE' }}>sistema web focado na gestão de equipes de futebol</span>,
                            com ênfase especial no gerenciamento financeiro. Utilizado por 140 escolas e aproximadamente 20
                            mil alunos. É um software pago, custando cerca de R$ 200.</p>
                    </div>
                    <div className='header-child header-image'>
                        <img src={Mockup} className='mockup-img' />
                        <div className='gradient-retangle'></div>
                    </div>
                </div>
                <div className="functionalities">
                    <h2 className="title-functionalities">Principais <span style={{ color: '#5960EE' }}>funcionalidades</span></h2>
                    <div className="functionalities-container">
                        <CardRed
                            icon={<PiJoystick />}
                            title='Controle de presenças'
                            description='Mantenha o controle preciso da presença dos membros do clube em 
                            treinos e eventos através de um sistema intuitivo e fácil de usar. Registre e 
                            acompanhe quem está presente em cada sessão, permitindo uma gestão eficiente 
                            da participação dos atletas.'
                        />

                        <CardBlue
                            icon={<MdOutlineSavings />}
                            title='Controle financeiro'
                            description='Mantenha a saúde financeira do clube sob controle com ferramentas 
                            que facilitam o registro de receitas e despesas. Acompanhe pagamentos de 
                            mensalidades, patrocínios, gastos com eventos e outras transações, garantindo 
                            transparência e eficiência.'
                        />

                        <CardRed
                            icon={<MdOutlineSportsSoccer />}
                            title='Convocação para jogos'
                            description='Agilize o processo de convocação para jogos com notificações 
                            automáticas para os atletas selecionados. Facilite a comunicação e confirmação 
                            de disponibilidade, garantindo uma equipe completa e bem preparada para cada 
                            partida.'
                        />

                        <CardBlue
                            icon={<FaRunning />}
                            title='Gerenciamento de Atletas'
                            description='Organize informações detalhadas de todos os atletas do clube, 
                            incluindo histórico de participações, desempenho em jogos, estatísticas e 
                            dados pessoais. Facilite a administração de contratos, renovações e 
                            transferências, proporcionando uma visão completa e atualizada do elenco.'
                        />
                    </div>
                </div>

                <div className='experiences-container row-container'>
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
                </div>

                {/*img {gifnote}*/}
                {/* <img src={gifnote} alt="" /> */}
                <div className='about-context'>
                    <div className='about-context-child'>
                        <h1 className='about-context-title'>Futpaz</h1>
                        <div className='about-context-subtitle'>
                            <GoLocation />
                            <p>Projeto Social | Piracicaba, SP</p>
                        </div>
                        <p>O Projeto Social FutPaz [Futpaz 2022], fica situado em um bairro carente da cidade de
                            Piracicaba-SP, e é uma <b>escola especializada no ensino da prática de futebol para crianças</b>
                            entre as idades de 7 a 14 anos (sub 9, sub 11, sub 13 e sub 15).</p> <br />

                        <p>Atualmente, esta escola atende em torno de <b>80 crianças e pré-adolescentes que buscam um
                            aperfeiçoamento dentro do esporte</b>, ofertando aulas e treinamentos, além de oferecer
                            outros benefícios ao aluno, por mérito do jogador, e a sua família, por meio de sorteios.</p>
                    </div>
                    <Slider images={images} />
                </div>
                <Footer />
            </div>
        </div>
    )
}
